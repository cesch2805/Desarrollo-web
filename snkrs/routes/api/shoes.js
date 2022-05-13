const express = require('express');
const shoeSchema = require ('../../models/shoe')
const readDB = require('../../dbConnection');

const router = express.Router();

//Get all shoes
router.get('/shoes', (req,res) => {
  shoeSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Get an shoes
router.get('/shoes/:id', (req,res) => {
  const { id } = req.params;
  shoeSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Create an shoe
router.post('/shoes', (req,res) => {
  const shoe = shoeSchema(req.body);
  shoe.save().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Uptype an shoe
router.put('/shoes/:id', (req,res) => {
  const { id } = req.params;
  const { name, description, type } = req.body;
  shoeSchema.uptypeOne({ _id:id },{ $set: {name,description,type} }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Delete an shoe
router.delete('/shoes/:id', (req,res) => {
  const { id } = req.params;
  shoeSchema.remove({ _id:id }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

module.exports = router;