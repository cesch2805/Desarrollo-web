const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger');
const shoeRoutes = require('./routes/api/shoes');
const mongoose = require('mongoose');
const readDB = require('./dbConnection');

const app = express();
const port = 7070;

// Run middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/', shoeRoutes);
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

mongoose.connect("mongodb://localhost:27017/shoes")
        .then(() => console.log("Connected to Atlas Database"))
        .catch((error) => console.error(error));

// Homepage route
app.get('/', (req, res) => {
    readDB.catch(console.error).then(shoes => {
        res.render('index', {
            title: 'Shoes',
            shoes
        });
    });
});

// Folder static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Running express app!'));