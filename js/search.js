// search.js
document.addEventListener('DOMContentLoaded', () => {
  customElements.whenDefined('header-component').then(() => {
    const headerComponent = document.querySelector('header-component');
    const shadow = headerComponent.shadowRoot;
    const searchInput = shadow.querySelector('#search-input');
    const searchResults = shadow.querySelector('#search-results');

    let allProducts = [];

    // Carrega os produtos e inicializa o Fuse.js
    fetch('json/products.json')
      .then(response => response.json())
      .then(products => {
        allProducts = products;
        const fuseOptions = {
          keys: ['name', 'category', 'description'],
          threshold: 0.4
        };
        const fuse = new Fuse(allProducts, fuseOptions);

        // Evento de input no campo de busca
        searchInput.addEventListener('input', () => {
          const query = searchInput.value.trim();
          if (query === '') {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            return;
          }
          const results = fuse.search(query);
          const filteredProducts = results.map(result => result.item);
          displaySearchResults(filteredProducts);
        });
      })
      .catch(error => console.error('Erro ao carregar os produtos:', error));

    // Função para exibir os resultados
    function displaySearchResults(products) {
      searchResults.innerHTML = '';
      if (products.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nenhum resultado encontrado';
        searchResults.appendChild(li);
      } else {
        products.forEach(product => {
          const li = document.createElement('li');
          li.textContent = product.name;
          li.addEventListener('click', () => {
            window.location.href = `product_page.html?id=${product.id}`;
          });
          searchResults.appendChild(li);
        });
      }
      searchResults.style.display = 'block';
    }

    // Ocultar a lista ao clicar fora
    document.addEventListener('click', (e) => {
      if (!headerComponent.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });
  });
});