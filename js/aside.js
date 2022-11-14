import { host } from "./constantes.js"

import { categoryItem } from "./categoryItem.js"
import { filter } from "./filter.js"

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
