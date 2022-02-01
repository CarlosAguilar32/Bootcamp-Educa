Vue.component('product-list', {
    data: function() {
        return {
            products: [],
            token: localStorage.getItem("token"),
            isLoading: true,
            query: '',
            current_category: ''
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
            self.isLoading=false;
        })
        .catch(function(error) {
            console.log("Error: " + error)
        })
    },
    methods:{
        onCategoryChange: function(pk) {
            this.current_category = pk
            this.UpdateList()
        },
        UpdateList: function() {
            var self = this;
            
            console.log("Update List")
            let get_products_url = "http://silabuz-api-project.herokuapp.com/products/products/"

            get_products_url = get_products_url + "?search=" + this.query
            get_products_url = get_products_url + "&category=" + this.current_category
            
            console.log(get_products_url)
            
            self.isLoading=true;
            
            fetch(get_products_url, {
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
                self.isLoading=false;
            })
            .catch(function(error) {
                console.log("Error: " + error)
            })
        }
    },
    template: `
        <div>
            <div class="row">
                <div class="col-12">
                <div class="form-group">
                    <input class="form-control" type="text" @change="UpdateList" v-model="query"></input>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <categories-list
                        v-on:category-changed="onCategoryChange"
                    ></categories-list>
                    <hr/>
                    <div v-if="isLoading">
                        <div class="spinner-border text-primary">
                            <span class="sr-only"> Cargando ... </span>
                        </div>
                    </div>
                    <div v-else>
                        <product-item 
                            v-for="product in products" 
                            v-bind:product="product">
                        </product-item>
                    </div>
                </div>
            </div>
        </div>
    `
})