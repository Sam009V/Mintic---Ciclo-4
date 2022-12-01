const express = require('express');
const router = express.Router();
const orderSchema = require('../models/order')

router.post('/orders', (req, res) => {
    const order = orderSchema(req.body);
    order
    .save()
    .then((data)=> res.json(data))
    .catch ((error) => res.json({message:error}))
    res.send("create order");
});

router.get('/orders', (req, res) => {
    orderSchema()
    .find()
    .then((data)=> res.json(data))
    .catch ((error) => res.json({message:error}))

});

router.get('/orders/:id', (req, res) => {
    const{id} = req.params;
    orderSchema()
    .findById(id)
    .then((data)=> res.json(data))
    .catch ((error) => res.json({message:error}))
    
});

module.exports = router;