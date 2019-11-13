//basic dependencies for creating a server

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Product = require('./models/Product');
//NoSql ODM
const mongoose = require('mongoose');
app.use(cors());
//Parse Request of Json Type
app.use(bodyParser.json());
//for routes
require('./routes/products.routes.js')(app);
require('./routes/orders.routes.js')(app);
//serve folder as static
app.use(express.static('client/build'));
//Redirect to the client side react
app.get('*',(req,res,next)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

mongoose.connect('mongodb://localhost:27017/ecom', { useNewUrlParser: true,useUnifiedTopology: true});
let db = mongoose.connection;
const PORT = process.env.PORT || 5000;

// Added Validation for DB connection
if(!db){
    console.log("Error connecting db")
}
else{
    console.log("Db connected successfully")
    // Launch app to listen to specified port
    app.listen(PORT,async() => {
        // let products = [
        //     {
        //         name: 'Long Round Tee',
        //         price: 590,
        //         size: ['xs','s','m','l'],
        //         color: ['Black','Brown'],
        //         imageUri: 'https://images.unsplash.com/photo-1486591267513-8283070135ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600'
        //     },{
        //         name: 'Beach Tee',
        //         price: 600,
        //         size: ['xs','s','m'],
        //         color: ['Black','Brown'],
        //         imageUri: 'https://images.unsplash.com/photo-1497280485314-be775e3e2316?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600'
        //     },{
        //         name: 'Girl Printed Tee',
        //         price: 600,
        //         size: ['xs','s','m'],
        //         color: ['Black','Blue'],
        //         imageUri: 'https://images.unsplash.com/photo-1496361001419-80f0d1be777a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600'
        //     },
        //     {
        //         name: 'Girl Lining Tee',
        //         price: 600,
        //         size: ['xs','s','m'],
        //         color: ['White','Blue'],
        //         imageUri: 'https://images.unsplash.com/photo-1474367658825-e5858839e99d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600'
        //     },
        // ]
        // try{
        //     await Product.insertMany(products);
        //     console.log("Running Ecommerce on port " + PORT);
        // }catch(e){
        //     console.log(e)
        // }
    });
}
    
