import { host } from "./constantes.js"

import { spinnerElement } from "./spinner.js"
import { card } from "./card.js"
import { nothing } from "./nothing.js"


/**
 * It fetches data from an API, then it creates a card for each product, and finally it appends the
 * cards to the DOM.
 */
export function section() {
    const url = host+"/api/products"

    spinnerElement("#section-div")

    fetch(url)
        .then(response => response.json())
        .then(response => {
            const { products } = response

            const childs = products.length
                ? products.map(product => card(product))
                    .reduce((current, next) => current + next)
                : nothing()

            const section = document.getElementById("section-div")
            section.innerHTML = childs
        })
}