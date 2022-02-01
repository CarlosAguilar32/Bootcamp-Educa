Vue.component('product_detail', {
  data: function(){
    return{
      product_name: this.$route.params.name
    }

  },
  methods:{
    SelectRed: function(){
      this.$router.push("/product/"+ this.product_name + "/color/rojo")
    },
    SelectBlue: function(){
      this.$router.push("/product/"+ this.product_name + "/color/blue")  
    }
  },
  template: `
  <div>
    <h1> {{ this.$route.params.name }} <h1>

    <button v-on:click="SelectBlue">Azul</button>
    <button v-on:click="SelectRed">rojo</button>

    </br>

    <router-view></router-view>

  </div>

  `
})