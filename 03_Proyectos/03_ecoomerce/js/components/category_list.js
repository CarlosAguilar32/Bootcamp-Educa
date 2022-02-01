Vue.component("categories-list", {
    data: function() {
        return {
            categories: [],
            isLoading: true,
            token: localStorage.getItem("token"),
            currentCategory: ''
        }
    },
    created: function() {
        var self=this
        fetch("http://silabuz-api-project.herokuapp.com/products/categories/", {
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
    methods: {
        onCategorySelect: function(pk){
            this.currentCategory = pk
            this.$emit("category-changed", pk)
        }
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
                    v-bind:category="category"
                    v-bind:currentCategory="currentCategory"
                    v-on:on-category-select="onCategorySelect">
                </category-item>
            </ul>
        </div>
    </div>
    `
})