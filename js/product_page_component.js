class ProductPageComponent {
  constructor() {
    this.productContainer = document.getElementById('product-container');
    this.loadProduct();
  }

  async loadProduct() {
    const productId = this.getProductIdFromURL();
    const product = await this.fetchProductById(productId);

    if (product) {
      this.renderProduct(product);
    } else {
      this.renderNotFound();
    }
  }

  getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  async fetchProductById(id) {
    try {
      const response = await fetch('json/products.json');
      const products = await response.json();
      return products.find(product => product.id == id);
    } catch (error) {
      console.error('Erro ao carregar o produto:', error);
    }
  }

  async fetchSellerById(sellerId) {
    try {
      const response = await fetch('json/users.json');
      const users = await response.json();
      return users.find(user => user.id == sellerId && user.is_seller);
    } catch (error) {
      console.error('Erro ao carregar o vendedor:', error);
    }
  }

  

  renderProduct(product) {
    // Gerar os itens da lista de detalhes técnicos
    let technicalDetailsHTML = '';
    if (product.technical_details && typeof product.technical_details === 'object') {
      technicalDetailsHTML = '<ul>';
      for (const [key, value] of Object.entries(product.technical_details)) {
        technicalDetailsHTML += `<li><strong>${this.capitalizeFirstLetter(key.replace(/_/g, ' '))}:</strong> ${value}</li>`;
      }
      technicalDetailsHTML += '</ul>';
    } else {
      technicalDetailsHTML = '<p>Detalhes técnicos não disponíveis.</p>';
    }


    this.productContainer.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
      <link rel="stylesheet" href="css/custom_styles.css">
      <link rel="stylesheet" href="css/product_page.css">
      <link href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

      <div class="container my-5">
      <div class="row">
        <!-- Seção de Imagens -->
        <div class="col-md-5">
          <img src="https://via.placeholder.com/400" alt="Produto Principal" class="product-image mb-3">
          <div>
            <img src="https://via.placeholder.com/60" alt="Thumbnail 1" class="thumbnail-image">
            <img src="https://via.placeholder.com/60" alt="Thumbnail 2" class="thumbnail-image">
            <img src="https://via.placeholder.com/60" alt="Thumbnail 3" class="thumbnail-image">
          </div>
        </div>

        <!-- Informações do Produto -->
        <div class="col-md-7">
          <span class="badge bg-custom-secondary text-custom-primary font-family-secondary mb-2 ">${product.category}</span>
          <h2 class="product-title text-custom-primary font-family-primary fw-bold fs-font-headings-product-page">${product.name}</h2>
          <p><span class="text-warning">★ ★ ★ ★ ☆</span> (4.7)</p>
          <p class="price text-custom-primary font-family-primary fw-bold fs-font-headings">${product.price}</p>
          <p>Produto revisado e aprovado pelo <b>Zé Aluga</p>

          <!-- Opções -->
          <div class="mb-3">
            <label for="colorOptions">Cor</label><br>
            <button class="options-button">${product.color}</button>
          </div>

          <!-- Quantidade e Botões -->
          <div class="mb-3">
            <label for="quantity">Quantidade</label>
            <div class="input-group w-50">
              <button class="btn outline-custom-primary bg-custom-primary color-custom-secondary">-</button>
              <input type="text" class="form-control text-center outline-custom-primary" value="1">
              <button class="btn outline-custom-primary bg-custom-primary color-custom-secondary">+</button>
            </div>
          </div>

          <h3 class="text-custom-primary font-family-primary fw-bold">Selecione o Período</h3>
          <input type="text" id="dateRangePicker" class="form-control flatpickr-input mb-2" placeholder="Selecione uma data de ínicio e fim">
          <button class="btn btn-buy">Alugar Agora</button>
          <button class="btn btn-cart">Adicionar ao Carrinho</button>

          <!-- Informações do Vendedor -->
          <div class="seller-info">
            <img src="https://via.placeholder.com/50" alt="Seller Logo" class="rounded-circle me-2">
            <div>
              <h6>Tudo para sua fazenda</h6>
              <p class="text-muted">Verificado ✓</p>
              <button class="btn btn-outline-primary btn-sm">Seguir</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Descrição do Produto e Especificações -->
      <div class="row mt-5">
        <div class="col-md-12">
          <h4>Descrição</h4>
          <p>${product.description}</p>

          <div class="row mt-5">
            <div class="col-md-12">
              <h4>Detalhes Técnicos</h4>
              ${technicalDetailsHTML}
            </div>
          </div>
        </div>
      </div>
    </div>


    `;
    
    flatpickr("#dateRangePicker", {
      mode: "range",
      dateFormat: "Y-m-d",
      minDate: "today",
    });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderNotFound() {
    this.productContainer.innerHTML = `
      <p>Produto não encontrado.</p>
    `;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  new ProductPageComponent();
});