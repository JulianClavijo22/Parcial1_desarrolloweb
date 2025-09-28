class ProductCard extends HTMLElement {
    constructor() {
        super();
        // Crear un Shadow DOM para encapsular el estilo y la estructura
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Obtener los atributos del componente
        const name = this.getAttribute('name');
        const price = this.getAttribute('price');
        const description = this.getAttribute('description');
        const image = this.getAttribute('image');

        // Definir la estructura y el estilo del componente
        this.shadowRoot.innerHTML = `
            <style>
                .product-card {
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    padding: 15px;
                    text-align: center;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    max-width: 250px;
                }
                .product-card img {
                    max-width: 100%;
                    height: auto;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 15px;
                    margin-bottom: 15px;
                }
                .product-price {
                    font-weight: bold;
                    color: #007bff;
                }
            </style>
            <div class="product-card">
                <img src="${image}" alt="${name}">
                <h3>${name}</h3>
                <p>${description}</p>
                <p class="product-price">$${price}</p>
            </div>
        `;
    }
}

// Registrar el nuevo componente personalizado
customElements.define('product-card', ProductCard);