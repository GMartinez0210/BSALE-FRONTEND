import { host } from "./constantes.js"

import { spinnerElement } from "./spinner.js"
import { card } from "./card.js"
import { section } from "./section.js"
import { nothing } from "./nothing.js"


/**
 * It filters the products by category
 */
export function filter() {
    const navItems = document.querySelectorAll(".categoria-item")

    navItems.forEach(navItem => {
        navItem.addEventListener("click", event => {
            event.preventDefault()

            const offCanvas = document.getElementById("offcanvasNavbar")
            offCanvas.classList.remove("show")
            offCanvas.style = "visibility: hidden;"
            offCanvas.removeAttribute("role")
            offCanvas.removeAttribute("aria-modal")
            offCanvas.setAttribute("aria-hidden", true)
            
            const shadow = document.querySelector(".offcanvas-backdrop.fade.show")
            shadow.remove()
            
            document.body.style = "overflow: unset;"

            const filter = navItem.textContent.trim()

            if(filter === "TODO") {
                section()
                return
            }
            
            const url = host+"/api/product-category?name="+filter

            spinnerElement("#section-div")

            fetch(url)
                .then(response => response.json())
                .then(response => {
                    const {filter: products} = response

                    const childs = products.length
                        ? products
                            .map(product => card(product))
                            .reduce((current, next) => current + next)
                        : nothing()
                
                    const section = document.getElementById("section-div")
                    section.innerHTML = childs
                })
        })
    })
}