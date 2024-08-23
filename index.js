const express = require('express')
const app = express()
const Product = require('./models/product.model.js');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route.js')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoutes)


app.get('/', (req, res) => {
    res.send('the respose came nno dejds api')
  })







mongoose.connect("mongodb+srv://rashal5:2diDpi6gyhsOxys6@backenddb.wpovy.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log('mongodb was connected');
    app.listen(3000,()=>{
        console.log('The server runing onthe port of 3000');
        
    })
    
})
.catch(()=>{
    
    console.log('the connection was failed');
    
});
