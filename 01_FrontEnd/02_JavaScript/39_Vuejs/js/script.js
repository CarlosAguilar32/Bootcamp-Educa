/*
var app = new Vue({
    el: "#app",
    data:{
        message: "Ahora: "+new Date(),
        seen:false
    }
})
*/
/*
var app4 = new Vue({
    el: "#app-4",
    data:{
        todos:[
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build somethinf awesome'}
        ]
    }
})
*/

/*
var app= new Vue({
    el: "#app",
    data:{
        message:"Ahora: "+new Date(),
        seen: false,
        tasks:[
            {"text": 'Comprar arroz',"done":false},
            {"text": 'Comprar azúcar',"done":false}
        ],
        newTask: "Nueva tarea"
    },
    methods:{
        addTask: function(){
            this.tasks.push({"text": this.newTask})
        }
    }
})
*/
var app = new Vue({
  el: "#app",
  data: {
    message: "Ahora: " + new Date(),
    seen: false,
    tasks: [],
    newTask: "Nueva tarea",
  },
  created: function () {
    if (localStorage.getItem("tasks") === null) {
      this.tasks = []
    } else {
      this.tasks = JSON.parse(localStorage.getItem("tasks"))
    }
  },
  methods: {
    addTask: function () {
      this.tasks.push({ text: this.newTask })
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
    },
  },
});
