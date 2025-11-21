/*
PASO 1: Obtener el término de búsqueda directamente de la URL.
 */

const productsAPI = "https://dummyjson.com/products";
let tituloBusqueda = document.querySelector(".searchTitle"); 
const contenedorResultados = document.querySelector(".contenedorResultados"); 

/*ME resguardo por posibles errores, qs vacio, etc */
function comenzarBusqueda () {
    const parametrosURL = new URLSearchParams(window.location.search);
    const terminoBuscado =parametrosURL.get('query');

    if (!terminoBuscado) {
        alert('Error: Por favor, use el buscador del Header.')
        tituloBusqueda.innerText = "Error: Por favor, use el buscador del Header.";
        return; 
    }

    if (tituloBusqueda) {
        tituloBusqueda.innerText = `Resultados de búsqueda para: ${userSearchTerm}`;
    }
};

fetch(productsAPI)
        .then(function(response) {
            return response.json(); 
        })
        .then(function(data) {
            let busquedasSimilares = 0; 
            const tituloBusqueda = userSearchTerm.toLowerCase();
            let resultsHTML = ''; 

            if (data.products) {
                for (let i = 0; i < data.products.length; i++) {
                    const product = data.products[i];
                    const productTitle = product.title.toLowerCase();

                    if (productTitle.includes(tituloBusqueda)) {
                        
                        matchingResultsCount += 1; 

                        // Construcción de la tarjeta (usando result-item y info)
                        resultsHTML += `
                            <article class="result-item"> 
                                <img src="${product.thumbnail || product.images[0]}" alt="${product.title}">
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
            }
            
            // Renderizado Final
            if (contenedorResultados) {
                if (matchingResultsCount > 0) {
                    contenedorResultados.innerHTML = resultsHTML;
                } else {
                    contenedorResultados.innerHTML = `No se encontraron resultados para: ${userSearchTerm}`;
                }
            }
        })
        .catch(function(error) {
            console.error("El error es: " + error);
            if (tituloBusqueda) {
                tituloBusqueda.textContent = "Error al cargar los datos. Intente más tarde.";
            }
        });
document.addEventListener('DOMContentLoaded', comenzarBusqueda);