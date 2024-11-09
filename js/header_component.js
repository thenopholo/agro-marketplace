class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/custom_styles.css">

    <div id="header" class="container-fluid bg-custom-primary text-white">
        <div class="container py-3 d-flex align-items-center justify-content-center">

            <!-- Logo e Localização -->
            <div class="d-flex align-items-center">
                <a href="index.html">
                    <img id="logo" src="assets/svg/LOGO_1.svg" alt="Logo" class="me-3" style="height: 40px;">
                </a>
                <div id="location" class="d-flex align-items-center">
                    <img src="assets/svg/location_icon.svg" alt="Location Pin" class="me-2" style="height: 20px;">
                    <span>São Paulo, Brasil</span>
                </div>
            </div>

            <!-- Campo de Busca com Ícone -->
            <div class="col-md-6 d-flex px-2">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="O que você precisa para fazer seu negócio crescer?">
                    
                    <button class="input-group-text bg-white border-0">
                        <i class="bi bi-search"></i>
                    </button>
                    
                </div>
            </div>

            <!-- Ícones e Usuário -->
            <div class="d-flex align-items-center">
                <!-- Dropdown para Categorias -->
                <div class="dropdown me-2">
                    <button class="btn outline-custom-secondary text-custom-secondary dropdown-toggle" type="button" id="dropdownCategorias" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </button>
                    <ul class="dropdown-menu custom-dropdown" aria-labelledby="dropdownCategorias">
                        <li><a class="dropdown-item" href="#">Categoria 1</a></li>
                        <li><a class="dropdown-item" href="#">Categoria 2</a></li>
                        <li><a class="dropdown-item" href="#">Categoria 3</a></li>
                    </ul>
                </div>

                <i class="bi bi-bell me-2" style="font-size: 1.2rem;"></i>
                <i class="bi bi-shop-window me-2" style="font-size: 1.2rem;"></i>
                <i class="bi bi-cart me-2" style="font-size: 1.2rem;"></i>
                <div id="logs" class="d-flex align-items-center">
                    <a href="singin.html" id="singup" class="btn bg-custom-secondary text-custom-primary me-2">Entrar</a>
                    <a href="singup.html" id="singin" class="btn bg-custom-secondary text-custom-primary">Cadastrar</a>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}

customElements.define('header-component', HeaderComponent);
