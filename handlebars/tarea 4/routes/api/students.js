const express = require('express');
const router = express.Router();
const StudentController = require('../../controllers/students/student');

// Get all students
router.get('/', StudentController.findAll);

// Get single student
// router.get('/:id', StudentController.findById);
router.get('/:email', StudentController.findByEmail);

// Create new student
router.post('/', StudentController.save);

// Update student
router.put('/:id', StudentController.update);

// Delete student
// router.delete('/:id', StudentController.deleteById);
router.delete('/:email', StudentController.deleteByEmail);

module.exports = router;