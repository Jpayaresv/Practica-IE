const express = require('express');
const app = express();

//var bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

function main(peticion, resultado) {
    //resultado.send('Hello World');
    resultado.sendFile(__dirname + "/atm.html")

}

function consignar(peticion, resultado) {
    resultado.sendFile(__dirname + "/consignar.html")
}

function extraer(peticion, resultado) {
    resultado.sendFile(__dirname + "/extraer.html")
}

app.get('/', main);
app.get('/extraer', extraer);
app.get('/consignar', consignar);



//app.use(express.static("public"))

app.listen(8989)