const searchForm = document.getElementById("search-form")

searchForm.addEventListener("submit", event => {
    event.preventDefault()

    const searchValue = document.getElementById("search-value")
    const filter = searchValue.value.trim()

    const section = document.getElementById("section-div")

    const spinner = `
        <div class="d-flex flex-column align-items-center justify-content-center my-5 py-5">
            <h3 class="suggestion mt-5"> Cargando... </h3>
            <div class="spinner-border text-scondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `

    section.innerHTML = spinner

    const url = "https://bsale-backend-test-2022.herokuapp.com/api/product-category?name="
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
        })
})