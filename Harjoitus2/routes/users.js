var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Alla oleva löytyy osoitteesta 'localhost:3000/users/toka' */
router.get('/toka', function(request, response) {
  response.send('Olen toka reitti');
  console.log('Tokan osion terminaaliviesti');
});

/* Lähetetään osoitteen antama teksti sivustolle,
  esim. 'localhost:3000/users/kolmas/Saana' */
router.get('/kolmas/:name', function(request, response) {
  response.send('Heippa ' +request.params.name);
  console.log(request.params.name);
});

router.get('/neljas/:fname/:lname', function(request, response) {
  response.send('Heippa ' +request.params.fname +' ' +request.params.lname);
  console.log(request.params.fname +' ' +request.params.lname);
});

/* Tämä osio tehdään Postmanilla eli lisätään tietoja:
  Environments > + > POST localhost:3000/users > Body > x-www-form-urlencoded >
  KEY: alle fname, lname & VALUE: alle täytetään tiedot esim. Aku, Ankka > SEND */
router.post('/', function(request, response) {
  response.send(request.body.fname +' ' +request.body.lname)
  console.log(request.body.fname +' ' +request.body.lname)
})

/* Muutosten tekeminen:
  Avataan Postman > PUT localhost:3000/users/1
  Muuta haluamasi tiedot taulukkoon > SEND */
router.put('/:id', function(request, response) {
  response.send('Henkilölle ' +request.params.id +' muutetaan nimeksi ' 
  +request.body.fname +' ' +request.body.lname)

  console.log(request.body.fname +' ' +request.body.lname)
})

module.exports = router;
