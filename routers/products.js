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

router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const productsObject = productArrToObj(mockProducts); //this will be delete
    const selectedProduct = productsObject[id];
    res.status(200).json({
        products: {
            [id]: selectedProduct
        }
    });
});

//post means create
router.post('/products', (req,res) =>{
    const productObject = productArrToObj(mockProducts);
    const id = 10000000000 * Math.random();
    const newProduct ={
        _id: id,

        name: 'something new',
        price: 1000,
        created: new Date(),
        imgSrc: 'http://via.placeholder.com/250x250'
    }

    mockProducts.push(newProduct);
    res.status(201).json({
        msg: 'Successfully created product'
    })


});
module.exports =router; //like export default