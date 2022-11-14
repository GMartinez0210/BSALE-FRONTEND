export function spinnerElement(selector) {
    const location = document.querySelector(selector)

    const spinner = `
        <div class="d-flex flex-column align-items-center justify-content-center my-5 py-5">
            <h3 class="suggestion mt-5"> Cargando... </h3>
            <div class="spinner-border text-scondary" role="status">
                <span class="visually-hidden"> Cargando... </span>
            </div>
        </div>
    `
    
    location.innerHTML = spinner
}