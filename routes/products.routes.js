module.exports = (app) => {
    const products = require('../controllers/ProductsController.js');

    // Retrieve all Products
    app.get('/products', products.findAll);
    app.get('/product/:id',products.findOne);
}