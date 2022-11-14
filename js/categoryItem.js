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