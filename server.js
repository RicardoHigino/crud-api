const express = require('express');

app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose');
livro = require('./api/models/livroModel');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://codericardo:14201030rr@js.rk0rm.mongodb.net/Books?retryWrites=true&w=majority')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/livroRoutes');
routes(app);

app.listen(port, () => {
    console.log('Server iniciado!')
})