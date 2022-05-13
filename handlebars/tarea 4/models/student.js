const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    matricula: String,
    name: String,
    email: String,
    status: String
});

const Student = mongoose.model('Students', studentSchema);

module.exports = Student;

