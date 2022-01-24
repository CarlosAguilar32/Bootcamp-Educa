Vue.component('a-component',{
    methods:{
        GoToB: function(){
            this.$router.push('/b')
        },
        GoBack: function(){
            this.$router.go(-1)
        }
    },
    template: `
    <div>
        <p> Hola, soy el componente A </p>
        <button v-on:click="GoToB">Ir a B</button>
        <button v-on:click="GoBack">Volver</button>
    </div>
    `
})