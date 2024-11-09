class FooterComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/custom_styles.css">

        <footer class="bg-custom-primary text-white py-5">
        <div class="container">
            <div class="row">
                <!-- Coluna Logo e Endereço -->
                <div class="col-md-4">
                <a href="index.html">
                    <img src="assets/svg/LOGO_1.svg" alt="Zé Aluga Logo" class="mb-3" style="width: 150px;">
                </a>
                    <address>
                        <p class="text-custom-tertiary">Avenida das Nações Unidas, nº 3.003, bairro Bonfim, Osasco, São Paulo, CEP 06233-903</p>
                        <p class="text-custom-secondary"><i class="bi bi-clock text-custom-secondary"></i> Segunda - Sexta / 8AM até 6PM</p>
                        <p class="text-custom-secondary"><i class="bi bi-telephone text-custom-secondary"></i> +55 (11) 99999-9999</p>
                    </address>
                </div>

                <!-- Coluna Navigation -->
                <div class="col-md-2">
                    <h5 class="text-uppercase text-custom-secondary">Descubra</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white text-decoration-none">Home</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Sobre nós</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Nossos Serviços</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Trabalhe Conosco</a></li>
                    </ul>
                </div>

                <!-- Coluna Services -->
                <div class="col-md-2">
                    <h5 class="text-uppercase text-custom-secondary">Serviços</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white text-decoration-none">Aluguel de Equipamentos</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Logística e Entregas</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Seja um Seller</a></li>
                    </ul>
                </div>

                <!-- Coluna Help -->
                <div class="col-md-2">
                    <h5 class="text-uppercase text-custom-secondary">Ajuda</h5>
                    <ul class="list-unstyled">
                        <li><a href="suport.html" class="text-white text-decoration-none">Suporte ao Consumidor</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Como Funciona?</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Termos & Condições</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Política e Privacidade</a></li>
                    </ul>
                </div>
            </div>

            <!-- Linha inferior com redes sociais e copyright -->
            <div class="row mt-4">
                <div class="col-md-6 d-flex align-items-center ">
                    <a href="#" class="text-white me-3"><i class="bi bi-facebook color-custom-secondary"></i></a>
                    <a href="#" class="text-white me-3"><i class="bi bi-twitter color-custom-secondary"></i></a>
                    <a href="#" class="text-white me-3"><i class="bi bi-linkedin color-custom-secondary"></i></a>
                    <a href="#" class="text-white"><i class="bi bi-instagram color-custom-secondary"></i></a>
                </div>
                <div class="col-md-6 text-md-end text-custom-secondary">
                    <small>&copy; 2024 Zé Aluga | Designed by Thenopholo</small>
                </div>
            </div>
        </div>
        </footer>

    
    `;
    }

}

customElements.define('footer-component', FooterComponent);