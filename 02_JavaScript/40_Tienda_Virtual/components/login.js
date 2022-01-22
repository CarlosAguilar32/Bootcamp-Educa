Vue.component("login-form", {
    data: function() {
        return {
            username: "",
            password: "",
            hasError:false
        }
    },
    methods: {
        DoLogin: function() {
            var self = this;
            fetch("https://silabuz-api-project.herokuapp.com/authentication/login/", {
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
                if (data.hasOwnProperty("token")){
                    self.$emit("on-login", data.token)
                } else{
                    self.hasError=true
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
                <span>Credenciales no válidas</span>
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
        </form>
    `
})
