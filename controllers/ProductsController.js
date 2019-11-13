const Product = require('../models/Product.js');

// Get all products
exports.findAll = async(req, res,next) => {
    try{
        const products = await Product.find({});
        res.send(products);
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Products."
        });
    }   
};