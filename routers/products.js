const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.send('Here be the products');
});

module.exports =router; //like export default