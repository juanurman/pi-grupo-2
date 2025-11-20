//ID url
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let productId = queryStringObj.get(`id`);

//URL API s
const urlProducto = `https://dummyjson.com/products/${productId}`;
const urlReviews = `https://dummyjson.com/comments`;
fetch(urlProducto)

.then(function(response){
    return response.json()
})

.then(function(data){
    let titulo = document.querySelector(`#m-h2-name`);
    let marca = document.querySelector(`.m-s2-p-brand`);
    let imagen = document.querySelector(`.m-s-image`);
    let descripcion = document.querySelector(`.m-s2-p-description`);
    let precio = document.querySelector(`.m-s2-price`);
    let stock = document.querySelector(`.m-s2-p-stock`);
    let categoria = document.querySelector(`.m-s2-a-category-link`);
    let tags = document.querySelector(`.m-s2-p-tags`);
    titulo.innerText = data.title;
    marca.innerText = data.brand;
    imagen.src = data.images;
    imagen.alt = data.title;
    descripcion.innerText = data.description;
    precio.innerText = `${data.price}$`;
    stock.innerText = `${data.stock} Unidades Restantes`;
    categoria.href = `./categoria.html?categoria=${data.category}`
    tags.innerText = data.tags
}
)