import { host } from "./constantes.js"

import { categoryItem } from "./categoryItem.js"
import { filter } from "./filter.js"

/**
 * It fetches the categories from the API, then it maps the categories to categoryItem, then it reduces
 * the mapped categories to a single string, then it inserts the string into the aside element, then it
 * calls the filter function.
 */
export function aside() {
    const url = host+"/api/categories"

    fetch(url)
        .then(response => response.json())
        .then(response => {
            const { categories } = response
            const childs = ["TODO", ...categories]
                .map(category => categoryItem(category))
                .reduce((current, next) => current + next)
        
            const aside = document.getElementById("aside")
            aside.innerHTML = childs
        
            filter()
        })
}
