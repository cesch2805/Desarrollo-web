const Person = require('../../models/person');
const { DateToString } = require('../../Utils/dateUtils')
const { client } = require('../../services/whatsapp')

const findAll = async (req, res) => {
    const result = await Person.find().lean();
    DateToString(result)
    
    res.render('index', {
        persons : result
    });
};

const save = async (req, res) => {
    console.log(`${req.body.name}  ${req.body.phone}  ${req.body.birthday}`)
    const newPerson = {
        name: req.body.name,
        phone: req.body.phone,
        birthday: req.body.birthday
    }

    if (!req.body.name || !req.body.phone || !req.body.birthday) {
        return res.status(400).json({ msg: 'Please include all data' });
    }

    const person = new Person(newPerson);
    await person.save();
    const result = await Person.find().lean();
    DateToString(result)

    res.redirect('/')

};

const update = async (req, res) => {
    const person = await Person.findById(req.body._id)
    const newPerson = {
        name: req.body.name ? req.body.name : person.name,
        phone: req.body.phone ? req.body.phone : person.phone,
        birthday: req.body.birthday ? req.body.birthday : person.birthday
    }

    await Person.findOneAndUpdate({_id: req.body._id}, newPerson)

    const result = await Person.find().lean();
    DateToString(result)
    res.redirect('/')
};

const deleteById = async (req, res) =>{
    await Person.deleteMany({ _id: req.body._id })
    const result = await Person.find().lean();
    DateToString(result)
    res.redirect('/')
};

const congratulate = async (req, res) => {
    const person = await Person.findById(req.body._id)
    console.log(person);
    console.log(req.body.msg);
    client.sendMessage(`521${person.phone}@c.us`, req.body.msg).catch(err => console.error);
    res.redirect('/')
}

module.exports = { findAll, save, update, deleteById, congratulate};