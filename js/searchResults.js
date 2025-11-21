const searchButton = document.querySelector(".h-n-s1-f-b"); 
const searchInput = document.querySelector(".h-n-s1-f-i"); 
const resultPage = "./search-results.html";

    searchButton.addEventListener('click', function(e) {
        const searchTerm = searchInput.value;

        if (searchTerm.length < 3) {
            e.preventDefault(); 
            alert("Por favor, introduce un mínimo de 3 caracteres para la búsqueda.");
            return; 
        }

        const finalURL = `${resultPage}?query=${searchTerm}&sortBy=title&order=asc`;
        window.location.href = finalURL;
    });

const searchTitle = document.querySelector(".searchTitle"); 
const contenedorResultados = document.querySelector(".contenedorResultados");
const parametrosURL = new URLSearchParams(window.location.search);

const terminoBusqueda = parametrosURL.get('query'); 
const sortBy = parametrosURL.get('sortBy');
const order = parametrosURL.get('order');

function comenzarBusqueda () {
    if (!terminoBusqueda || terminoBusqueda.length < 3) {
            searchTitle.innerText = "Error: Búsqueda incompleta o inválida.";
        return false; 
    }
        searchTitle.innerText = "Resultados de búsqueda para: " + terminoBusqueda;
    return true;
};


function realizarBusqueda() {
    let searchAPI = "https://dummyjson.com/products/search?q=" + terminoBusqueda;

    if (sortBy && order) {
        searchAPI += "&sortBy=" + sortBy + "&order=" + order;
    }

    fetch(searchAPI)
        .then(function(response) {
            return response.json(); 
        })
        .then(function(data) {
            const terminoBusquedaMin = terminoBusqueda.toLowerCase();
            
            const resultadosSoloEnTitulo = data.products.filter(function(product) {
                return product.title.toLowerCase().includes(terminoBusquedaMin);
            });

            let busquedasSimilares = resultadosSoloEnTitulo.length; 
            let resultadosHTML = ''; 
            
            for (let i = 0; i < busquedasSimilares; i++) {
                const product = resultadosSoloEnTitulo[i];
                
                resultadosHTML += `
                    <article class="m-s-result-item"> 
                        <div class="m-s-image-product">
                            <img src="${product.images[0]}" alt="${product.title}">
                        </div>
                        <div class="m-s-info">
                            <h3 class="m-s-info-title" >${product.title}</h3>
                            <p class="m-s-info-description" >${product.description}</p>
                            <p class="m-s-info-price" ><b>$${product.price}</b></p>
                            <a href="./product.html?id=${product.id}" class="m-s-info-detail>Ver detalle</a>
                        </div>
                    </article>
                `;
            }
            
            if (busquedasSimilares > 0) {
                contenedorResultados.innerHTML = resultadosHTML;
            } else {
                contenedorResultados.innerText = "No se encontraron resultados para: " + terminoBusqueda;
            }
        })
        .catch(function(error) {
            console.error("El error es: " + error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    if (comenzarBusqueda()) { 
        realizarBusqueda();
    }
});