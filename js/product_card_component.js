class ProductCardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set product(data) {
    this.render(data);
  }

  render(product) {
    this.shadowRoot.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
      <link rel="stylesheet" href="css/custom_styles.css">

      <div class="card product-card shadow-sm rounded-3 h-100">
        <img src="${product.image || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <div class="text-start">
            <span class="badge bg-custom-secondary text-custom-primary fs-custom-category mb-2">${product.category}</span>
          </div>
          <h5 class="card-title text-dark fw-bold fs-product-card-title">${product.name}</h5>
          <div class="d-flex align-items-center justify-content-between">
            <p class="card-text text-dark fs-5 fw-bold .fs-product-card-price">${product.price}</p>
            <div class="d-flex align-items-center">
              <span class="badge bg-light text-warning">
                <i class="bi bi-star-fill"></i> ${product.rating}
              </span>
            </div>
          </div>
          <div class="d-flex justify-content-between text-muted small">
            <div class="d-flex"><i class="bi bi-geo-alt color-custom-primary fs-product-card-location-icon"></i> <span class="fs-product-card-location">${product.location}</span></div>
            <span class="fs-product-card-units">${product.is_available ? product.available_units + ' Disponíveis' : 'Indisponível'}</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('product-card', ProductCardComponent);