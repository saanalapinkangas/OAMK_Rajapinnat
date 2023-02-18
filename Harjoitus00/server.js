const http = require('http');   // valitaan http-kirjasto

  const hostname = '127.0.0.1'; // localhost
  const port = 3001;    // portti (muutettavissa)

  const server = http.createServer(     // luodaan server-funktio joka tulostaa tämän
      function (req, res) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Hello World\n');
      }
  );

  server.listen(port, hostname, 
      function() {
          console.log(`Server running at http://${hostname}:${port}/`);
      }
  );

  // Muista julkaista tiedosto: terminaali > node server.js
  // Pitäisi nyt löytyä netistä osoitteella "localhost:3001"