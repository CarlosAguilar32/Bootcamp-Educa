Vue.component('product-list', {
    data: function() {
        return {
            products: [],
            token: localStorage.getItem("token"),
            isLoading:true
        }
    },
    created: function() {
        var self = this;
        fetch("http://silabuz-api-project.herokuapp.com/products/products/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + this.token
            }
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            self.products = data;
            self.isLoading=false
        })
        .catch(function(error) {
            console.log("Error: " + error)
        })
    },
    template: `
        <div class="row">
            <div class="col-12">
                <div v-if="isLoading">
                    <div class="spinner-border text primary">
                         <span class="sr-only"> Cargando..</span>
                    </div>            
                </div>
               
                <div v-else>
                    <categories-list></categories-list>
                    <hr>
                    <product-item
                        v-for="product in products" 
                        v-bind:product="product">
                    </product-item>
                </div>
            </div>
        </div>
    `
})