const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Whatsapp',contactSchema);