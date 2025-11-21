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

// textos producto

.then(function(data){
    let titulo = document.querySelector(`#m-h2-name`);
    let marca = document.querySelector(`.m-s2-p-brand`);
    let imagen = document.querySelector(`.m-s-image`);
    let description = document.querySelector(`.m-s2-p-description`);
    let precio = document.querySelector(`.m-s2-price`);
    let stock = document.querySelector(`.m-s2-p-stock`);
    let categoria = document.querySelector(`.m-s2-a-category-link`);
    let tags = document.querySelector(`.m-s2-p-tags`);
    titulo.innerText = data.title;
    marca.innerText = data.brand;
    imagen.src = data.images[0];
    imagen.alt = data.title;
    description.innerText = data.description;
    precio.innerText = `${data.price}$`;
    stock.innerText = `${data.stock} Unidades Restantes`;
    categoria.href = `./categoria.html?categoria=${data.category}`;
    categoria.innerText = `${data.category.toUpperCase()}`
    tags.innerText = data.tags;

//reviews
let comentariosHTML = "";
let sectReviews = document.querySelector(".s-a"); 
let resenas = data.reviews;

if (resenas.length === 0) {
    sectReviews.innerHTML = "<p>Aún no hay comentarios para este producto.</p>";
    return;
}

    for (let i = 0; i < resenas.length; i++) {
        const comentario = resenas[i];
        const fecha = comentario.date
        const rating = comentario.rating;
        const nombreUsuario = comentario.reviewerName;
        const textoComentario = comentario.comment;
        comentariosHTML += `
            <article class="a-s-a">
                <img src="./img/icons8-user-circle-24.png" alt="Icono de usuario" class="a-s-a-img">
                <p class="a-s-a-p"><b>Nombre:</b> ${nombreUsuario}</p>
                <p class="a-s-a-p-rating"><b>Rating:</b> ${rating}</p>
                <p class="a-s-a-p-date"><b>Fecha:</b> ${fecha}</p>
                <p class="a-s-a-p-text">${textoComentario}</p>
            </article>
        `;
        sectReviews.innerHTML = comentariosHTML;
}
}
)