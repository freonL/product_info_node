const express = require('express');
const router = express.Router();
const Product = require('../models/Products');


// List of Product
router.get('/', async (req,res) => {
  try {
    const promise = await Product.find();
    res.json(promise);
  } catch (error) {
    res.json({message: error});
  }
});


// Product Infromation by ID
router.get('/:id', async (req,res) => {
  try {
    const promise = await Product.findById(req.params.id);
    res.json(promise);
  } catch (error) {
    res.json({message: error});
  }
});


// Create new product
router.post('/',async (req,res) => {
  const rec = new Product({
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    pic_url: req.body.pic_url
  })

  try {
    const promise = await rec.save();
    res.json(promise);
  } catch (error) {
    res.json({message: error});
  }
})


// Update Product Information
router.put('/:id', async (req,res) => {
  try {
    const promise = await Product.updateOne(
      { _id: req.params.id},req.body
    );
    res.json(promise);
  } catch (error) {
    res.json({message: error});
  }
})


// Delete a product by ID
router.delete('/:id', async (req,res) => {

  try {
    const promise = await Product.deleteOne({ _id: req.params.id});;
    res.json(promise);

  } catch (error) {
    res.json({message: error});

  }
})

module.exports = router;