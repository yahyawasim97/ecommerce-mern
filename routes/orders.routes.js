module.exports = (app) => {
    const orders = require('../controllers/OrdersController.js');

    // Order Products
    app.post('/order', orders.create);
}