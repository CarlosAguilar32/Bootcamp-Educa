Vue.component("categories-list", {
    data: function() {
        return {
            categories: [],
            isLoading: true,
            token: localStorage.getItem("token")
        }
    },
    created: function() {
        var self=this
        fetch("https://silabuz-api-project.herokuapp.com/products/categories/", {
            method: "GET",
            header: {
                "Content-Type": "application/json",
                "Authorization": "Token " + this.token
            }
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            self.categories = data;
            self.isLoading = false;
        })
        .catch(function(error) {
            console.log("Error: ", error)
        })
    },
    template: `
    <div class="row">
        <div class="col-12">
            <div v-if="isLoading">
                <div class="spinner-border text-primary">
                    <span class="sr-only"> Cargando ... </span>
                </div>
            </div>
            <ul class="nav nav-pills nav-fill" v-else>
                <category-item 
                    v-for="category in categories"
                    v-bind:category="category">
                </category-item>
            </ul>
        </div>
    </div>
    `
})