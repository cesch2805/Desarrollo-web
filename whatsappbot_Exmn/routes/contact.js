const express = require('express');
const contactSchema = require ('../models/contact')

const router = express.Router();

//Get all contacts
router.get('/contacts', (req,res) => {
  contactSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Get a contacts
router.get('/contacts/:id', (req,res) => {
  const { id } = req.params;
  contactSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Create a contact
router.post('/contacts', (req,res) => {
  const contact = contactSchema(req.body);
  contact.save().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Update a contact
router.put('/contacts/:id', (req,res) => {
  const { id } = req.params;
  const { name, phone, date } = req.body;
  contactSchema.updateOne({ _id:id },{ $set: {name,phone,date} }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Delete a contact
router.delete('/contacts/:id', (req,res) => {
  const { id } = req.params;
  contactSchema.remove({ _id:id }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

module.exports = router;