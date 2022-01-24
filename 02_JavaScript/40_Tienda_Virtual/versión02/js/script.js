const router = new VueRouter({
    routes: [
        { path: '/login', component: 'login-form'},
        { path: '/product-list', component: 'product-list'}
    ]
}) 


var app = new Vue({
    router,
    data: {
        message: "hello world!",
        logged: false
    },
    methods: {
        OnLogin: function(token) {
            this.logged=true;
            localStorage.setItem("token", token)
            console.log("Evento Login recibido en App")
        },
        DoLogout: function() {
            localStorage.removeItem("token")
            this.logged = false;
        }
    },
    created() {
        if (localStorage.getItem("token") === null) {
            this.$router.push('login')
        } else {
            this.$router.push('product-list')
        }
    }
}).$mount('#app')