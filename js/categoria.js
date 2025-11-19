let QS = location.search
let QSObj = new URLSearchParams(QS)
let param = QSObj.get(`categoria`)
let urlProdCat = `https://dummyjson.com/products/category/${param}`
const urlcat = "https://dummyjson.com/products/categories"
fetch(urlProdCat)

.then(function(response){
    return response.json()
})

.then(function(data){
    let sectContenido = document.querySelector(`.m-s`) 
    let article = ""
    let productos = data.products
    for (let i = 0; i < productos.length; i++) {
        let img = productos[i].images[0]
        let title = productos[i].title
        let price = productos[i].price
        let id = productos[i].id
        let description = productos[i].description
        article += `
        <article class="m-s-a">
                    <img src="${img}" alt="Iphone 17 Pro Max" class="m-s-a-img">
                    <h3 class="m-s-a-h3">${title}</h3>
                    <p class="m-s-a-p">${description}</p>
                    <span class="m-s-a-sp">${price}$</span>
                    <a href="./product.html?id=${id}" class="m-s-a-s-a">Ver Detalle</a>
                </article>
            `
            let titulo = document.querySelector(`.m-s-h2`)
            titulo.innerText = param.toUpperCase()
    }
    sectContenido.innerHTML += article
})
.catch(function(error){
    console.log(`Surgio un error ${error}`)
})



fetch(urlcat)

.then(function(response){
    return response.json()
})

.then(function(data){
    let categorias = ""
    let sectAside = document.querySelector(".a-s-ul")
    for (let i = 0; i < 8; i++) {
        const info = data[i];
        let categoria = info.slug.toUpperCase()
        categorias += `
        <article class="a-s-ul-art">
            <a href="./categoria.html?categoria=${categoria}" class="a-s-ul-a-a">${categoria}</a>
        </article>
        <hr class="hr-home">
        ` 
    }
    sectAside.innerHTML += categorias 
    
})

.catch(function(error){
    console.log(`Surgio un error ${error}`)
})



