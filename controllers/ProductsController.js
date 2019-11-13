const Product = require('../models/Product.js');

// Get all products
exports.findAll = async(req, res,next) => {
    try{
        let pageLimit =12;
        let total = await Product.count();
        let totalPages = Math.ceil(total/pageLimit);
        let page = req.param('page')&&  req.param('page') || 1;
        let itemsToSkip = (page *pageLimit)- pageLimit;
        const products = await Product.find({}).skip(itemsToSkip).limit(pageLimit);
        res.send({products,total:totalPages,currentPage:page});
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Products."
        });
    }   
};