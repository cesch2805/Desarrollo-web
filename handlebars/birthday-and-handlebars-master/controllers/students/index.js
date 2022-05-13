const Student = require('../../models/student');

const findAll = async (req, res) => {
    const result = await Student.find().lean();
    console.log(result)
    res.render('index', {
        students : result
    });
};

const save = async (req, res) => {
    const newStudent = {
        matricula: req.body.matricula,
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!req.body.name || !req.body.email) {
        return res.status(400).json({ msg: 'Please include name and email' });
    }

    const student = new Student(newStudent);
    await student.save();
    const result = await Student.find().lean();
    res.render('index', {
        students : result
    });
};

async function update(req, res) {

};

async function deleteById(req, res) {

};

module.exports = { findAll, save };