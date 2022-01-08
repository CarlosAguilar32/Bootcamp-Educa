
    console.log(document.body.children); // [div,script]
    console.log(document.body.children.length); // 2

    console.log(document.body.children[0]); // <div id="app" ..
    console.log(document.body.children[1]); // <script ...
    console.log(document.body.parentElement); // <html>

    const app = document.querySelector("#app");
    console.log(app.children); // [div.header, p, a]

    console.log(app.firstElementChild); // div.header -> app.children[0]

    console.log(app.lastElementChild); // a -> app.children[n-1] -> [3-1 = 2]

    const h1 = app.children[0].children[0]; // h1
    //const h1 = app.firstElementChild.firstElementChild; // h1
    console.log(h1);

    const strong = app.children(0);
    
