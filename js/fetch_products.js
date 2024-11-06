fetch('json/products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('product-container');
    products.forEach(product => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';

      const productCard = document.createElement('product-card');
      productCard.product = product;

      col.appendChild(productCard);
      container.appendChild(col);
    });
  })
  .catch(error => console.error('Erro ao carregar os produtos:', error));