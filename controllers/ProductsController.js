const Product = require('../models/Product.js');

// Get all products
exports.findAll = async(req, res,next) => {
    try{
        const pageLimit =12;
        const total = await Product.count();
        const totalPages = Math.ceil(total/pageLimit);
        const page = req.param('page')&&  req.param('page') || 1;
        const itemsToSkip = (page *pageLimit)- pageLimit;
        const products = await Product.find({}).skip(itemsToSkip).limit(pageLimit);
        res.send({products,total:totalPages,currentPage:page});
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Products."
        });
    }   
};

exports.findOne = async(req,res,next)=>{
    try{
        const id = req.params.id;
        if(id){
            const product = await Product.find({_id:id});
            res.status(200).send(product[0]);
        }else{
            res.status(400).send('Please Provide id of the product');
        }
       
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Products."
        });
    }  
}