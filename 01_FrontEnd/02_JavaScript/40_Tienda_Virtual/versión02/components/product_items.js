Vue.component("product-item", {
    props: ["product"],
    template: `
        <div class="row">
            <div class="col-2">
                <img class="img-thumbail" width= "100%" v-bind:src="product.image_url"/>
            </div>
            <div class="col-6">
                <h5>{{product.name}}</h5>
                <p>{{product.description}}</p>
                <p>{{product.price}}</p>
            </div>
            <div class="col-4">
                <button class="btn btn-primary">
                    Agregar al carrito
                </button>
            </div>
        </div>
    `
})