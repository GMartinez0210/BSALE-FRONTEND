function filter() {
    const navItems = document.querySelectorAll(".categoria-item")

    navItems.forEach(navItem => {
        navItem.addEventListener("click", event => {
            event.preventDefault()

            const filter = navItem.textContent.trim()

            const url = "https://bsale-backend-test-2022.herokuapp.com/api/product-category?name="
            
            const section = document.getElementById("section-div")
        
            fetch(url+filter)
                .then(response => response.json())
                .then(response => {
                    const {filter: products} = response

                    const childs = products.length
                        ? products
                            .map(product =>
                                `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 px-3 py-5 h-100">
                                    <div class="card m-auto card-producto">
                                        <img class="card-img-top card-producto-img" src=${product.url_image || './images/browser-512.png'} alt="${product.name}" loading="lazzy">
                                        <div class="card-body d-flex flex-column justify-content-between">
                                            <div class="mt-3">
                                                <h5 class="card-title product-name"> ${product.name} </h5>
                                                <p class="card-price product-price"> $ ${product.price} </p>
                                                ${
                                                    !!product.discount
                                                    ? `<p class="btn btn-lg btn-desct">
                                                        <span class="desct"> ${product.discount}% </span> 
                                                        off
                                                    </p>`
                                                    : ``
                                                }
                                            </div>
                                            <div>
                                                <button class="btn btn-block " type="button">
                                                    <i class="bi bi-plus"></i>
                                                    <span>Añadir al carrito</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
                            )
                            .reduce((current, next) => current + next)
                        : `<h3 class="suggestion">Lo invitamos a elegir otro producto :) </h3>`
                
                    section.innerHTML = childs

                    const offCanvas = document.getElementById("offcanvasNavbar")
                    const shadow = document.querySelector(".offcanvas-backdrop.fade.show")

                    offCanvas.classList.remove("show")
                    shadow.classList.remove("show")
                })
        })
    })
}

async function aside() {
    const url = "https://bsale-backend-test-2022.herokuapp.com/api/categories"
    const {categories} = await fetch(url)
        .then(response => response.json())

    const childs = ["TODO", ...categories]
        .map(category => 
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
        .reduce((current, next) => current + next)

    const aside = document.getElementById("aside")
    aside.innerHTML = childs

    filter()
}

aside()