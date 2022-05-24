const { Router } = require('express');
const { productsController } = require("../controllers/produdcts.controller");

const router = Router();

router.get('/products', productsController.getProducts)

router.get('/products/:id', productsController.getProductsID)

router.post('/products', productsController.postProducns)

router.delete('/products/:id', productsController.deleteProducts)

module.exports = router;