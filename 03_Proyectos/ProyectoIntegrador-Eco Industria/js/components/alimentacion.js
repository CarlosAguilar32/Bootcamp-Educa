/* Component: Navbar 
   Contiene la barra de navegación 
   así como los link de acceso a otras paginas */

import STORAGE from "../utils/storage.js";

export default Vue.component("alimentacion", {
    data: function () {
        return {
          products: [],
          token: localStorage.getItem("token"),
          query: '',
          category: {},
        };
      },
      methods: {
        goProduct(){
          this.$router.push("/product-view")
        },
        async setCategory(category) {
          let vm = this;
          vm.current_category = category;
          await vm.getProducts();
        },
        async getProducts() {
          let vm = this;
    
          let url = "/listar_productos";
          url += "?search=" + vm.search;
          if (vm.current_category.name != "Todos") {
            url += "&category=" + vm.current_category.pk;
          }
          //Enviamos la petición Via GET
          const response = await CLIENT.get(url);
          // Almacenamos el token si el inicio de sesión es correcto
          vm.products = response.sort((a, b) => {
            return b.discount_price - a.discount_price;
          });
          // Redirigimos al usuario al home
        },
        async getCategories() {
          let vm = this;
    
          //Enviamos la petición Via GET
          const response = await CLIENT.get(
            "/alimentacion"
          );
          // Cargamos las categorias 
          vm.categories = response;
           // Añadimos la categoria "Todos" con una pk = 0
          vm.categories.unshift({ pk: 0, name: "Todos" });
          // Definimos el primer item de la lista de categorias-> ("Todos") 
          vm.current_category = vm.categories[0]; // {pk:0, name:"Todos"}
     
        },
        async onSearchKeyup(event) {
          // Sincronizamos el valor ingresado por teclado
          // con la propiedad search 
          this.search = event.target.value;
          // Actualizamos la lista de productos
          await this.getProducts();
        },
        // newProduct(){
        //   STORAGE.remove("product");
        //   this.$router.push("products/edit")
        // }
      },
      created: async function () {
        var self = this;
        fetch('https://api-eco-industria.herokuapp.com/alimentacion',{
          method: 'GET',
          headers : {
            "Content-Type": "application/json",
            "Authorization": "Token " + this.token
          }
        })
        .then(function(response){
          return response.json()
        })
        .then(function(data){
          self.products = data.items;
          self.isLoading=false;
          console.log(data)
        })
        .catch(function(error) {
          console.log("Error: " + error)
        })
        
      },
    template: `
            <section>
            <div class="my-5 text_primary text-center">
                    <h1 class="font_mochiy">ALIMENTACIÓN</h1>
                </div>
            <div class="container mt-2" >

                <div class="row gx-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 " >
                    <div class="col mb-5"  v-for="product in products" :key="product.id">
                        <div class="card h-100 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                            <img  v-bind:src="product.photo_1" alt="..." class="card-img-top img-fluid img-thumbnail">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">{{ product.name }}</p>
                                <div class="d-flex justify-content-center text-warning small"><i
                                        class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i
                                        class="bi bi-star-fill"></i> <i class="bi bi-star"></i> <i
                                        class="bi bi-star"></i> <span class="px-3 text-dark">3</span></div>
                            </div> <span id="precio" class="mb-2">Q {{product.price}}.00</span>
                            <div class="col-md-12 d-flex justify-content-center mb-2">
                              <button
                              @click="goProduct" class="btn-dark bg_primary fw-bolder  rounded ">
                                    Ver Producto
                                </button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      <!-- <section>
        <div class="d-flex justify-content-around row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4">
        
          <div class="h-100  py-2"  v-for="product in products" :key="product.id">
            <div class="col mb-5" >
  
              <div class="card h-100 p-2 shadow-lg d-flex align-items-center " >
                <img  v-bind:src="product.photo_1" class="card-img-top img-fluid img-thumbnail" alt="...">
                <div class="card-body">
                  <h4 class="card-text fw-bolder text-center">{{ product.name }}</h4>
                  <div class="d-flex justify-content-center text-warning small">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                   </div>
                </div>
                <span id="precio" class="mb-2">Q {{product.price}}</span>
                <div class="col-md-12 d-flex justify-content-center mb-2">
                  <button @click="goProduct" class="btn-dark bg_primary fw-bolder  rounded ">
                    Ver Producto
                  </button>
                </div>
              </div>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
            </div>
          </div>

        </div>
      </section> -->

      `,
  });
  