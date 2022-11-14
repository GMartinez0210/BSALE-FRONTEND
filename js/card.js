export function card(product) {
    return (
        `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 px-3 py-5 h-100">
            <div class="card m-auto card-producto">
                <img class="card-img-top card-producto-img" src=${product.url_image || './images/browser-512.png'} alt="${product.name}" loading="lazzy">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div class="mt-3">
                        <h5 class="card-title product-name"> ${product.name} </h5>
                        <p class="card-price product-price"> $ ${product.price} </p>
                        ${hasDiscount(product)}
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
}

function hasDiscount(product) {
    if(!product.discount) {
        return ""
    }

    return (
        `<p class="btn btn-lg btn-desct">
            <span class="desct"> 
                ${product.discount}% 
            </span> 
            off
        </p>`
    )
}