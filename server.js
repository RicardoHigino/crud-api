require('dotenv').config();
const express = require('express');
const routes = require('./routes');

app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose');
livro = require('./api/models/livroModel');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTIONSTRING)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes)

app.listen(port, () => {
    console.log('Server iniciado!')
})