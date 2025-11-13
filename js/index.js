url = "https://dummyjson.com/products"

fetch(url)

.then(function(response){
    return response.json()
})

.then(function(data){
    const productos = data.products
    let mainDom = document.querySelector(".m-s")
    let lanzamientosDom = document.querySelector(".sect-lanzamientos")
    let producto = ""
    let lanzamiento = ""
    for (let i = 0; i < 21; i++) {
        let img = productos[i].images
        let titulo = productos[i].title
        let precio = productos[i].price
        let descripcion = productos[i].description
        let id = productos[i].id
        if (i < 11) {
            producto += `
            <article class="m-s-a">
                        <img src=${img} alt="imagen de un iphone" class="m-s-a-img">
                        <h3 class="m-s-a-h3">${titulo}</h3>
                        <p class="m-s-a-p">${descripcion}</p>
                        <span class="m-s-a-sp">${precio}$</span>
                        <a href="./product.html?id=${id}" class="m-s-a-s-a">Ver Detalle</a>
            </article>
            ` 
        }    
        else if (i>11 & i< 21){
        lanzamiento +=`<article class="s-l-art">
                <img src="${img}" alt="imagen de unos Apple Vision Pro" class="m-s-a-img-mac">
                <h4 class="s-l-a-h4">${titulo}</h4>
                <p class="s-l-a-p">${descripcion}</p>
                <span>${precio}</span>
                <a href="./product.html?id=${id}" class="m-s-a-s-a">Ver Detalle</a>
            </article>
        `    
    }}
    mainDom.innerHTML += producto
    lanzamientosDom.innerHTML += lanzamiento

})
.catch(function(error){
    console.log(`Surgio un error ${error}`)
})