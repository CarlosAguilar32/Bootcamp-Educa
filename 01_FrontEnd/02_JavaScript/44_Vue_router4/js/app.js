
const router = new VueRouter({
    routes: [
         {
             path: "/product/:name", 
             component: "product_detail",
             children: [
                 {path: '',component: "product-color-default"},
                 {path: 'color/:color',component: "product-color"},
             ]
            }
    ]
})

const app = new Vue({
    router,
}).$mount("#app")