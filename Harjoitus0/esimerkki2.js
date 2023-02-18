var fs = require("fs");

// Tämä on asynkroninen funktio (vrt. esimerkki.js), "callback".
// Asynkronisessa kutsussa ei jäädä odottamaan, että edellinen komento
// valmistuu ennen kuin uusi suoritetaan. Koska tiedostonluku on
// hitaampaa kuin console.login tulostus, tulee console.log ensin
// näkyviin vaikka se tulee järjestyksessä tiedostoluvun jälkeen.

fs.readFile('input.txt', function (err, data) {     //function palauttaa virheen(err, esim ei löydä tiedostoa) tai halutun datan
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program ended");


// Asynkronisuuden vuoksi käytetään Nodea (tai Apachea).
// Esim. pankkiautomaatti palvelee useita asiakkaita yhtä aikaa
// eikä jää odottamaan yhden valmistumista ennen seuraavaa.