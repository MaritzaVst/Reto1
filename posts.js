var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomId = faker.internet.ip();
  var randomName = faker.name.findName();
  var randomContenido = faker.lorem.sentence();
  var randomFecha = faker.date.recent();
  var randomImg = faker.image.avatar();
  return {
    id: randomId,
    nombre: randomName,
    contenido: randomContenido,
    fecha: randomFecha,
    imagen: randomImg
  }

}

app.get('/', function (req, res) {
  res.send('Este es mi primer reto de la semana ¡Sí! :3');
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/posts2', function (req, res) {
  res.send('Segundo EndPoint :D');
})


app.listen(3000);