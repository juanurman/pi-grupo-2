/*
PASO 1: Obtener el término de búsqueda directamente de la URL.
 */

const productsAPI = "https://dummyjson.com/products";
let searchTitle = document.querySelector(".searchTitle"); 
const contenedorResultados = document.querySelector(".contenedorResultados");
const parametrosURL = new URLSearchParams(window.location.search);
const terminoBusqueda =parametrosURL.get('query'); 

/*ME resguardo por posibles errores, qs vacio, etc */
function comenzarBusqueda () {
    if (!terminoBusqueda) {
        let searchTitle = document.querySelector(".searchTitle"); 
        searchTitle.innerText = "Error: Por favor, use el buscador del Header.";
        return; 
    }
    if (searchTitle) {
        terminoBusqueda.innerText = `Resultados de búsqueda para: ${terminoBusqueda}`;
    }
};

fetch(productsAPI)
        .then(function(response) {
            return response.json(); 
        })
        .then(function(data) {
            let busquedasSimilares = 0; 
            const terminoBusquedaMin = terminoBusqueda.toLowerCase();
            let resultadosHTML = ''; 

            
            for (let i = 0; i < data.products.length; i++) {
                const product = data.products[i];
                const productTitle = product.title.toLowerCase();
                    if (productTitle.includes(terminoBusquedaMin)) {
                    busquedasSimilares ++; 

                    
                    resultadosHTML += `
                        <article class="result-item"> 
                            <img src="${product.images[0]}" alt="${product.title}">
                            <div class="info">
                                <h3>${product.title}</h3>
                                <p>${product.description}</p>
                                <p>$${product.price.toFixed(2)}</p>
                                <a href="./product-detail.html?id=${product.id}">Ver detalle</a>
                            </div>
                        </article>
                        `;
                    }
                }
            
            
            // render
                if (busquedasSimilares > 0) {
                    contenedorResultados.innerHTML = resultadosHTML;
                } else {
                    contenedorResultados.innerText = `No se encontraron resultados para: ${terminoBusqueda}`;
                }
            
        }
    )

.catch(function(error) {
            console.error("El error es: " + error);
            searchTitle.innerText = "Error al cargar los datos. Intente más tarde.";
    });
        ;

document.addEventListener('DOMContentLoaded', comenzarBusqueda);