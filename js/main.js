document.addEventListener('DOMContentLoaded', () => {
    // Función para cargar componentes HTML dinámicamente
    const loadComponent = (url, elementId) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error(`Error al cargar el componente desde ${url}:`, error));
    };

    // Cargar el header, sidebar y footer
    loadComponent('components/header.html', 'header-placeholder');
    loadComponent('components/sidebar.html', 'sidebar-placeholder');
    loadComponent('components/footer.html', 'footer-placeholder');

    // Cargar y mostrar los productos desde el JSON usando el Web Component
    const loadProducts = () => {
        const productList = document.getElementById('product-list');

        fetch('data/products.json')
            .then(response => response.json())
            .then(products => {
                products.forEach(product => {
                    const productCard = document.createElement('product-card');

                    productCard.setAttribute('name', product.name);
                    productCard.setAttribute('price', product.price);
                    productCard.setAttribute('description', product.description);
                    productCard.setAttribute('image', product.image);

                    productList.appendChild(productCard);
                });
            })
            .catch(error => console.error('Error al cargar los productos:', error));
    };

    loadProducts();
});