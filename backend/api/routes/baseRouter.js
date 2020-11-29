import express from 'express';
import products from '../storage/products.js';

const router = express.Router();

router.get('/products', (req, res) => {
    res.status(200).json(products);
});
router.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find((p) => p._id === productId);

    res.status(200).json(product);
});

export default router;
