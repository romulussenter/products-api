const express = require('express');
const serverApp = express();

const PORT = process.env.PORT || 5000; //necessary for HEroku deployment

//Routers
const productRouter = require('./routers/products');

serverApp.use(productRouter); //register the products with the router

serverApp.get('/', (req,res) =>{
    res.send('stufff');
});

serverApp.listen(PORT, () =>{
    console.log(`Now listening on this port ${PORT}`);
});

