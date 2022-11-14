import { host } from "./constantes.js"

import { spinnerElement } from "./spinner.js"
import { card } from "./card.js"
import { nothing } from "./nothing.js"

const searchForm = document.getElementById("search-form")

searchForm.addEventListener("submit", event => {
    event.preventDefault()

    const searchValue = document.getElementById("search-value")
    const filter = searchValue.value.trim()

    spinnerElement("#section-div")

    const url = host+"/api/product-category?name="+filter
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