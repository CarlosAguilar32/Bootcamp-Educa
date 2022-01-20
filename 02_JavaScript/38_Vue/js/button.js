/*
Vue.component("btn-demo", {
  props: ["initial"],
  data: function () {
    return {
      counter: 0,
    };
  },
  template:
    '<button v-on:click="add()"> {{parseInt(initial) + counter}} </button>',
  methods: {
    add: function () {
      console.log(this.counter);
      this.counter = this.counter + 1;
    },
  },
});
*/
Vue.component('btn-demo', {
    props: ['initial'],
    data: function(){
        return {
            counter: 0
        }
    },
    template: `
        <div class="number-counter">
            <button v-on:click="minus()">-</button>
            <span>{{parseInt(initial) + counter}}</span>
            <button v-on:click="add()">+</button>
   
        </div>
        `,
    methods: {
        add: function() {
            this.counter = this.counter + 1;
        },
        minus: function() {
            this.counter = this.counter - 1;
        }
    }

})
