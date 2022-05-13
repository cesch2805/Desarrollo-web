const express = require('express');
const router = express.Router();
const {findAll, save, update, deleteById, congratulate} = require('../controllers/persons/index');

// Homepage route
router.get('/', findAll);

// Create
router.post('/persons', save);

// Update
router.post('/update', update);

// Delete
router.post('/delete', deleteById);

//congratulate
router.post('/congratulate' , congratulate)

module.exports = router;