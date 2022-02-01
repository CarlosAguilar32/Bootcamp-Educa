Vue.component("category-item",{
    props:["category"],
    template: `
        <li class="nav-item">
            <a class="nav-link">
                {{category.name}}
            </a>
        </li>
    `
})