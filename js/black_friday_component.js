class BlackFridayComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set product(data) {
    this.render(data);
  }

  render(product) {
    const calculateDiscountPrice = (price, discountPercentage) => {
      const numericPrice = parseFloat(price.replace('R$', '').replace('.', '').replace(',', '.'));
      const discountPrice = numericPrice - (numericPrice * (discountPercentage / 100));
      return `R$ ${discountPrice.toFixed(2).replace('.', ',')}`;
    };

    this.shadowRoot.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
      <link rel="stylesheet" href="css/custom_styles.css">
      <link rel="stylesheet" href="css/home.css">

      <div class="card product-card shadow-sm rounded-8">
        <img src="${product.image || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <div class="text-start">
            <span class="badge bg-custom-secondary text-custom-primary fs-custom-category mb-2">${product.category}</span>
          </div>
          <h5 class="card-title text-dark fw-bold fs-product-card-title">${product.name}</h5>
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <p class="text-muted text-decoration-line-through mb-0">${product.price}</p>
              <p class="text-dark fs-5 fw-bold fs-product-card-price">${calculateDiscountPrice(product.price, product.discount_percentage)}</p>
            </div>
            <span class="badge bg-danger">-${product.discount_percentage}%</span>
          </div>
          <div class="d-flex justify-content-between text-muted small location-container">
            <div class="d-flex">
              <i class="bi bi-geo-alt color-custom-primary fs-product-card-location-icon"></i>
              <span class="fs-product-card-location">${product.location}</span>
            </div>
            <span class="fs-product-card-units">${product.sold_quantity || 0} Vendidos</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('black-friday', BlackFridayComponent);