const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: String,
    phone: String,
    birthday: Date
},  { collection: 'persons' })

const Person = mongoose.model('Whatsapps', personSchema);

module.exports = Person;
