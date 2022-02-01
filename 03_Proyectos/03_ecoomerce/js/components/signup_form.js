Vue.component('signup-form', {
    data: function() {
        return {
            email: '',
            username: '',
            password: '',
            error: '',
            hasError: false
        }
    },
    methods: {
        GoToBack: function() {
            this.$router.go(-1)
        },
        DoSignUp: function() {
            var self = this
            self.hasError = false
            fetch('http://silabuz-api-project.herokuapp.com/authentication/sign-up/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                    email: this.email
                })
            })
            .then(function(response) {
                console.log(response.status)
                if (response.status == 400) {
                    self.hasError = true
                }
                return response.json()
                
            })
            .then(function(data) {
                
                if (self.hasError == false) {
                    self.$router.push('/login')
                } else {
                    self.error = data.detail
                }
            })
            .catch(function (error) {
                console.log('Error', error)
            })
        }
    },
    template: `
        <div>
            <div class="alert alert-danger" v-if="hasError">
                {{this.error}}
            </div>
            <form class="form">
                <div class="form-group">
                    <label>Correo</label>
                    <input class="form-control" type="text" v-model="email"></input>
                </div>
                <div class="form-group">
                    <label>Usuario</label>
                    <input class="form-control" type="text" v-model="username"></input>
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input class="form-control" type="password" v-model="password"></input>
                </div>
                <button class="btn btn-success col-12" @click="DoSignUp" type="button">
                    Guardar
                </button>
                <br>
                <br>
                <button class="btn btn-success col-12" @click="GoToBack" type="button">
                    Cancelar
                </button>
            </form>
        </div>
    `
})