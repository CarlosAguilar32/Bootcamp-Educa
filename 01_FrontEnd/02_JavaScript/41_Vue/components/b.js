Vue.component("b-component",{
    methods:{
        GoToA: function(){
            this.$router.push('/a')
        },
        GoBack: function(){
            this.$router.go(-1)
        }
    },
    template: `
    <div>
        <p> Hola, soy el componente B </p>
        <button v-on:click="GoToA">Ir a A</button>
        <button v-on:click="GoBack">Volver</button>
    </div>
    `
})