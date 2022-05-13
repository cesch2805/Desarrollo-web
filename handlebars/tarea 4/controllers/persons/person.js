const Person = require('../../models/person')
const { formatDate } = require('../../Utils/dateUtils')

const findAll = async (req, res) => {
    const result = await Person.find()
    res.json(result)
}

const findByID = async (req, res) => {
        const exist = await Person.findById(req.params.id)

        if (exist) {
            res.json({ person: exist });
        } else {
            res.status(400).json({ msg: `No person with the id ${req.params.id}`});
        }
}

const save  = async (req, res) => {
    const newPerson = {
        name: req.body.name,
        phone: req.body.phone,
        birthday: formatDate(req.body.birthday)
    }
    
    if (!req.body.name || !req.body.phone || !req.body.birthday) {
        return res.status(400).json( { msg: 'Please include all data' });
    }
    
    const person = new Person(newPerson)
    const result = await person.save()
    res.status(201).json({ msg: 'person created', person: result })
}

const update  = async (req, res) => {
    const exist = await Person.findById(req.params.id)

    if (exist) {
        const result = await Person.findOneAndUpdate({
            _id: req.params.id
        }, req.body)

        res.status(201).json({ msg: 'person updated', person: result });
    } else {
        res.status(400).json({ msg: `No person with the id ${req.params.id}`});
    }
}

const deleteById  = async (req, res) => {
    const exist = await Person.findById(req.params.id)

    if (exist) {
        const result = await Person.deleteMany({ _id: req.params.id })
        res.json( { msg: 'person deleted', Person: result });
    } else {
        res.status(400).json({ msg: `No person with the id ${req.params.id}`});
    }
}


module.exports = {
    findAll,
    findByID,
    save,
    update,
    deleteById
}