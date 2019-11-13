//basic dependencies for creating a server

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
//NoSql ODM
const mongoose = require('mongoose');
app.use(cors());
//Parse Request of Json Type
app.use(bodyParser.json());
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
    app.listen(PORT,() => {
        console.log("Running RestHub on port " + PORT);
    });
}
    
