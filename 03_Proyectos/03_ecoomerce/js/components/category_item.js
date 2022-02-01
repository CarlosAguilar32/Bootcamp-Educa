Vue.component("category-item", {
    props: ["category", "currentCategory"],
    data: function() {
        return {
            currentClass: "nav-link"
        }
    },
    created: function() {
        
        if (this.currentCategory == this.category.pk) {
            this.currentClass="nav-link active"
        }
        
    },
    methods: {
        OnCategorySelect: function() {
            this.$emit('on-category-select', this.category.pk)
        }
    },
    watch: {
        currentCategory: function(newVal, oldVal) {
            if (newVal == this.category.pk) {
                this.currentClass="nav-link active"
            } else {
                this.currentClass="nav-link"
            }
        }
    },
    template: `
        <li class = "nav-item" >
            <a v-bind:class="currentClass" @click="OnCategorySelect" >
                {{ category.name }}
            </a>
        </li>
    `
})