import productModel from '../../model/product_model/product_model';

function productRepository() {
    return {
        getProducts: async () => {
            const response = await fetch('http://localhost:8080/products');
            const products = await response.json();

            return products.map(product => new productModel(product.id, product.category, product.name, product.price, product.description, product.image));
        }
    };
}