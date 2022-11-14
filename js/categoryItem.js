/**
 * It returns a string of HTML that contains a list item with a link inside. The link has a class of
 * "nav-link categoria-item p-3" and the text inside the link is either the name of the category or
 * "TODO" if the category is "TODO".
 * @param category - is the category object
 * @returns A string of HTML code.
 */
export function categoryItem(category) {
    return (
        `<li class="nav-item">
            <a class="nav-link categoria-item p-3" href="#">
                ${
                    category != "TODO"
                    ? category.name.toUpperCase()
                    : "TODO"
                }
            </a>
        </li>`
    )
}