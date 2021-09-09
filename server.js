require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('ready')
    })
    .catch((e) => console.log(e))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Server initialized on port 3000')
    })
})
