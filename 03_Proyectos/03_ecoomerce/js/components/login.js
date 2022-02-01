Vue.component("login-form", {
    data: function() {
        return {
            username: "",
            password: "",
            hasError: false
        }
    },
    methods: {
        GoToSignUp: function() {
            this.$router.push("/sign-up")
        },
        DoLogin: function() {
            var self = this;
            self.hasError = false
            fetch("http://silabuz-api-project.herokuapp.com/authentication/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            })
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)
                if (data.hasOwnProperty("token")) {
                    //self.$emit("on-login", data.token)
                    localStorage.setItem("token", data.token)
                    self.$router.push("/product-list")
                } else {
                    self.hasError = true
                }
                
            })
            .catch(function(error) {
                console.log("Error: ", error)
            })
        }
    },
    template: `
        <form class="form">
            <div class="alert alert-danger" v-if="hasError">
                Credenciales no validas
            </div>
            <div class="form-group">
                <label>Usuario</label>
                <input class="form-control" type="text" v-model="username"></input>
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <input class="form-control" type="password" v-model="password"></input>
            </div>
            <button class="btn btn-primary col-12" @click.prevent="DoLogin" type="submit">
                Iniciar Sesion
            </button>
            <br/><br/>
            <button class="btn btn-success col-12" @click="GoToSignUp" type="button">
                Registrarme
            </button>
        </form>
    `
})