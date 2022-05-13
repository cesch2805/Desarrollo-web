const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact');
const client = require('./bot/whats');
require("dotenv").config();

const app = express();
const port = 7000;

app.use(express.json());
app.use('/api', contactRoutes)

//API route
app.get('/', (req, res) => {
  res.send("This is my API");
});

//Connection to MongoDB Database
mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Connected to Atlas Database"))
        .catch((error) => console.error(error));

//Initialize Whatsapp Client
client.initialize();

app.listen(port, () => console.log('Running express app!'));