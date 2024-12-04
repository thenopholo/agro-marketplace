document.addEventListener('DOMContentLoaded', () => {
  let products = [];
  let filteredProducts = [];

  // Carregar os produtos do JSON
  fetch('json/products.json')
    .then(response => response.json())
    .then(data => {
      products = data;
      populateFilters();
      displayProducts(products);
    })
    .catch(error => console.error('Erro ao carregar os produtos:', error));

  // Preencher as opções dos filtros de categoria e localização
  function populateFilters() {
    const categoryContainer = document.getElementById('category-checkboxes');
    const locationContainer = document.getElementById('location-checkboxes');

    // Preencher categorias
    const categories = [...new Set(products.map(product => product.category))];
    categories.forEach(category => {
      const checkboxDiv = document.createElement('div');
      checkboxDiv.className = 'form-check';

      const checkbox = document.createElement('input');
      checkbox.className = 'form-check-input';
      checkbox.type = 'checkbox';
      checkbox.value = category;
      checkbox.id = `category-${category}`;

      const label = document.createElement('label');
      label.className = 'form-check-label';
      label.htmlFor = `category-${category}`;
      label.textContent = category;

      checkboxDiv.appendChild(checkbox);
      checkboxDiv.appendChild(label);
      categoryContainer.appendChild(checkboxDiv);
    });

    // Preencher localizações
    const locations = [...new Set(products.map(product => product.location))];
    locations.forEach(location => {
      const checkboxDiv = document.createElement('div');
      checkboxDiv.className = 'form-check';

      const checkbox = document.createElement('input');
      checkbox.className = 'form-check-input';
      checkbox.type = 'checkbox';
      checkbox.value = location;
      checkbox.id = `location-${location}`;

      const label = document.createElement('label');
      label.className = 'form-check-label';
      label.htmlFor = `location-${location}`;
      label.textContent = location;

      checkboxDiv.appendChild(checkbox);
      checkboxDiv.appendChild(label);
      locationContainer.appendChild(checkboxDiv);
    });

    // Adicionar listeners para aplicar filtros automaticamente
    addFilterListeners();
  }

  function addFilterListeners() {
    // Listeners para os checkboxes de categoria
    const categoryCheckboxes = document.querySelectorAll('#category-checkboxes input[type="checkbox"]');
    categoryCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', applyFilters);
    });

    // Listener para o checkbox de promoção
    document.getElementById('promo-checkbox').addEventListener('change', applyFilters);

    // Listener para o select de rating
    document.getElementById('rating-select').addEventListener('change', applyFilters);

    // Listeners para os checkboxes de localização
    const locationCheckboxes = document.querySelectorAll('#location-checkboxes input[type="checkbox"]');
    locationCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', applyFilters);
    });

    // Listeners para os campos de preço
    document.getElementById('min-price').addEventListener('input', applyFilters);
    document.getElementById('max-price').addEventListener('input', applyFilters);
  }

  function applyFilters() {
    // Obter as categorias selecionadas
    const selectedCategories = Array.from(document.querySelectorAll('#category-checkboxes input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);

    // Obter o valor do checkbox de promoção
    const promoChecked = document.getElementById('promo-checkbox').checked;

    // Obter o valor selecionado de Qualidade Mínima
    const selectedRating = parseFloat(document.getElementById('rating-select').value) || 0;

    // Obter as localizações selecionadas
    const selectedLocations = Array.from(document.querySelectorAll('#location-checkboxes input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);

    // Obter os valores mínimos e máximos de preço
    const minPriceInput = document.getElementById('min-price').value;
    const maxPriceInput = document.getElementById('max-price').value;

    const minPrice = minPriceInput ? parseFloat(minPriceInput) : 0;
    const maxPrice = maxPriceInput ? parseFloat(maxPriceInput) : Infinity;

    filteredProducts = products.filter(product => {
      // Converter o preço do produto para número
      const productPrice = parseFloat(
        product.price
          .replace('R$', '')
          .replace('.', '')
          .replace(',', '.')
          .trim()
      );

      const matchesCategory = selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true;
      const matchesPromo = promoChecked ? product.has_discount === true : true;
      const matchesRating = product.rating >= selectedRating;
      const matchesLocation = selectedLocations.length > 0 ? selectedLocations.includes(product.location) : true;
      const matchesPrice = productPrice >= minPrice && productPrice <= maxPrice;

      return matchesCategory && matchesPromo && matchesRating && matchesLocation && matchesPrice;
    });

    displayProducts(filteredProducts);
  }

  // Função para exibir os produtos
  function displayProducts(productsToDisplay) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    if (productsToDisplay.length === 0) {
      productsContainer.innerHTML = '<p>Nenhum produto encontrado.</p>';
      return;
    }

    productsToDisplay.forEach(product => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';

      const card = document.createElement('div');
      card.className = 'card h-100';

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const categoryLabel = document.createElement('h6');
      categoryLabel.className = 'd-inline-block px-1 py-1 bg-custom-secondary text-custom-primary font-family-primary rounded';
      categoryLabel.textContent = product.category;

      const productName = document.createElement('h5');
      productName.className = 'card-title font-family-primary text-custom-primary ';
      productName.textContent = product.name;

      const priceText = document.createElement('p');
      priceText.className = 'fs-product-card-price';
      const productPrice = parseFloat(
        product.price
          .replace('R$', '')
          .replace('.', '')
          .replace(',', '.')
          .trim()
      );
      priceText.innerHTML = `<strong>R$ ${productPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>`;

      const ratingText = document.createElement('p');
      ratingText.className = 'text-muted';
      ratingText.textContent = `Qualidade: ${product.rating.toFixed(1)} estrelas`;

      const locationText = document.createElement('p');
      locationText.className = 'text-muted';
      locationText.textContent = product.location;

      const detailsButton = document.createElement('a');
      detailsButton.href = `product_page.html?id=${product.id}`;
      detailsButton.className = 'btn bg-custom-primary text-custom-secondary font-family-primary';
      detailsButton.textContent = 'Alugar Já!';

      cardBody.appendChild(categoryLabel);
      cardBody.appendChild(productName);
      cardBody.appendChild(priceText);
      cardBody.appendChild(ratingText);
      cardBody.appendChild(locationText);
      cardBody.appendChild(detailsButton);

      card.appendChild(cardBody);
      col.appendChild(card);
      productsContainer.appendChild(col);
    });
  }
});