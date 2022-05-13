const Student = require('../../models/student');

async function findAll(req, res) {
    const result = await Student.find();
    res.json(result);
};

async function findById(req, res) {
    const exist = await Student.findById(req.params.id);

    if (exist) {
        res.json({ student: exist });
    } else {
        res.status(400).json({ msg: `No student with the id ${req.params.id}`});
    }
};

async function findByEmail(req, res) {
    const exist = await Student.find({email: req.params.email});

    if (exist) {
        res.json({ student: exist });
    } else {
        res.status(400).json({ msg: `No student with the email ${req.params.email}`});
    }
};

async function save(req, res) {
    const newStudent = {
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!req.body.name || !req.body.email) {
        return res.status(400).json({ msg: 'Please include name and email' });
    }

    const student = new Student(newStudent);
    const result = await student.save();
    res.status(201).json({ msg: 'Student created', student: result});
};

async function update(req, res) {
    const exist = await Student.findById(req.params.id);

    if (exist) {
        await Student.findOneAndUpdate({
            _id: req.params.id
        }, req.body);
        res.status(201).json({ msg: 'Student updated', student: await Student.findById(req.params.id)});
    } else {
        res.status(400).json({ msg: `No student with the id ${req.params.id}`});
    }
};

async function deleteById(req, res) {
    const exist = await Student.findById(req.params.id);

    if (exist) {
        await Student.deleteMany({_id: req.params.id});
        res.json( { msg: 'Student deleted', students: await Student.find() });
    } else {
        res.status(400).json({ msg: `No student with the id ${req.params.id}`});
    }
};

async function deleteByEmail(req, res) {
    const exist = await Student.find({email: req.params.email});
    console.log(exist);
    if (exist.length > 0) {
        await Student.deleteMany({email: req.params.email});
        res.json( { msg: 'Student deleted', students: await Student.find() });
    } else {
        res.status(400).json({ msg: `No student with email ${req.params.email}`});
    }
};

module.exports = {findAll, findById, findByEmail, save, update, deleteById, deleteByEmail};
