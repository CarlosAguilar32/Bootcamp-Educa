const router = new VueRouter({
    routes: [
        {path: '/a', component: 'a-component'},
        {path: '/b', component: 'b-component'}
    ]
})

var app = new Vue({
    el: "#app"
}).$mount("#app")