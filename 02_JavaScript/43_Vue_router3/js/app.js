
const router = new VueRouter({
    routes: [
         {path: "/hello/:name", component: "hello"},
         {path: "/bye/:name", component: "bye"}
    ]
})

const app = new Vue({
    router,
    data: {
        name: ""
    },
    methods: {
        SayHello: function(){
            this.$router.push("/hello/" + this.name)
        },
        SayBye: function(){
            this.$router.push("/bye/" + this.name)
        }
    }
}).$mount("#app")