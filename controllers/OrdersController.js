const Order = require('../models/Order.js');

// Get all products
exports.create = async(req, res,next) => {
    if(!req.body.products || req.body.products.length < 1) {
        return res.status(400).send({
            message: "Please add atlease one product"
        });
    }
    let total = 0;
    req.body.products.forEach(p=>{
        total += p.product.price * p.quantity;
    })
    
    const order = new Order({
        products: req.body.products,
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        amount:total,
        country:req.body.country,
        city:req.body.city
    });

    try{
        await order.save();
        res.send('Order Successfully Created');
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating Order."
        });
    }   
};