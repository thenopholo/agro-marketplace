class SellerCardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set seller(data) {
        this.render(data);
    }

    render(seller) {
        this.shadowRoot.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="css/home.css">
        <link rel="stylesheet" href="css/custom_styles.css">

        <div class="card">
            <img src="${seller.banner || 'https://via.placeholder.com/150'}" alt="Banner" class="banner">
            <img src="${seller.profile_picture || 'https://via.placeholder.com/80'}" alt="Foto de Perfil" class="profile-pic">
            <div class="card-body">
            <div class="store-name">${seller.store_name}</div>
            <div class="seller-name">por ${seller.name}</div>
            <div class="stats">
                <div>
                <span>${seller.product_count || 0}</span>
                Produtos
                </div>
                <div>
                <span>${seller.deals_count || 0}</span>
                Negócios
                </div>
                <div>
                <span>${seller.followers_count || 0}</span>
                Seguidores
                </div>
            </div>
            <button class="follow-button">Seguir</button>
            </div>
        </div>
    `;
    }
}

customElements.define('seller-card', SellerCardComponent);