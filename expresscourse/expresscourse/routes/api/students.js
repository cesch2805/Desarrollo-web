const fs = require('fs');

const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const students = require('../../Students');
let lId = 0
students.forEach(student => {
    if(student.id > lId){
        lId = student.id
    }
});

const filename = 'studen.json';


// Get all students
router.get('/', (req, res) => res.json(students));

// Get single student
router.get('/:id', (req, res) => {
    // res.send(req.params.id);
    const exist = students.some(student => student.id === parseInt(req.params.id));

    if (exist) {
        res.json(students.filter(student => student.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No student with the id ${req.params.id}`});
    }
});

// Create new student
router.post('/', (req, res) => {
    const newStudent = {
        id: ++lId,
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!req.body.name || !req.body.email) {
        return res.status(400).json( { msg: 'Please include name and email' });
    }

    students.push(newStudent);
    fs.writeFile(filename, JSON.stringify(students), function writeJSON(err){
        if(err) return console.log(err);
        
    });
    // res.json(students);
    res.redirect('/');
});

// Update student
router.put('/:id', (req, res) => {
    const exist = students.some(student => student.id === parseInt(req.params.id));

    if (exist) {
        const updStudent = req.body;
        students.forEach(student => {
            if (student.id === parseInt(req.params.id)) {
                student.name = updStudent.name ? updStudent.name : student.name;
                student.email = updStudent.email ? updStudent.email : student.email;

                let arr = JSON.stringify(students);
                fs.writeFile(filename, arr, err =>{
                    if(err)throw err;
                    console.log("Data");
                });
                res.json({ msg: 'Student updated', student });
            }
        });

    } else {
        res.status(400).json({ msg: `No student with the id ${req.params.id}`});
    }
});

// Delete student
router.delete('/:id', (req, res) => {
    const exist = students.some(student => student.id === parseInt(req.params.id));

    if (exist) {
        
        res.json( { msg: 'Student deleted', student: students.filter(student => student.id !== parseInt(req.params.id)) });
        students.forEach(student => {
            if(student.id === parseInt(req.params.id)){
                pos = students.indexOf(student);
            }
        });
        students.splice(pos,1);
        let arr = JSON.stringify(students);
        fs.writeFile(filename, arr, err =>{
            if(err)throw err;
            console.log("Student deleted");
        });

    } else {
        res.status(400).json({ msg: `No student with the id ${req.params.id}`});
    }

    fs.writeFile(filename, JSON.stringify(students), function writeJSON(err){
        if(err) return console.log(err);
        
    });

    
});

module.exports = router;