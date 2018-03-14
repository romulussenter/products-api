const express = require('express');
const router = express.Router();
const mockProducts =require('../mocks/products');
const productArrToObj = (arrayOfProducts) => {
    //creat an accumlator object
    const accumlator = {};
    //for Each priduct in arrayOfProducts
    arrayOfProducts.forEach(product => {
        const id = product._id;
        const copy = {...product}
        delete copy.id;
        accumlator[id] = copy;
    });
        //grab the id
        //delete the _id internal to the oject
        //set the id value in the accumulator object equal to product
        //return accumulator
        return accumlator;
}
router.get('/products', (req, res) => {
    res.status(200).json({
        products: productArrToObj(mockProducts)
    })
});

module.exports =router; //like export default