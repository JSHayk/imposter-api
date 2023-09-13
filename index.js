const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*'
}));

app.get('/audio', (req, res) => {
  fs.readFile('./aram.mp3', function(err, result)  {
    res.send(result.toString("base64"));
  });
});

app.listen(4000, () => console.log(`Server run on 4000`))