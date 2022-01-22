var app = new Vue({
    el: "#app",
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
            this.logged = false;
        } else {
            this.logged = true;
        }
    }
})