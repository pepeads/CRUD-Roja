const express = require('express');
const indexRoutes = require('./routes/routes')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

// MONGOO URI

const db = require('./config/keys').mongoURI;

// CONEXIÓN BD
mongoose.connect(db)
    .then(() => console.log('conectado a mongodb'))
    .catch(err => console.log('mongo error'));

app.listen(3000, () => (console.log('servidor escuchando en el puerto 3000')));
// app.listen(3000,'servidor escuchando en el puerto 3000');


app.use('/', indexRoutes);