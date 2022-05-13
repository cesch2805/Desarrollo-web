const express = require('express');
const router = express.Router();
const { findAll, findByID, save, update, deleteById } = require('../../controllers/persons/person')

// Get all students
router.get('/', findAll);

// Get single student
router.get('/:id', findByID);

// Create new student
router.post('/', save);

// Update student
router.put('/:id', update);

// Delete student
router.delete('/:id', deleteById);

module.exports = router;