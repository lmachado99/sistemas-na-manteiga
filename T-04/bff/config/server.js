const express = require('express');
let app = express();
let port = 3000;
var cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors(corsOptions))
app.set('view engine', 'ejs');
app.set('views', './app/views')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, function () {
    console.log('Servidor rodando com o express na porta', port);
})

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

module.exports = app;