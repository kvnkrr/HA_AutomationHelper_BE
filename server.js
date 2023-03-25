const express = require('express');
const app = express();


const https = require('https');

function getFastComSpeed() {
  return new Promise((resolve, reject) => {
    https.get('https://fast.com/', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get('/refuge', (req, res) => {
  res.sendFile('./refugeSchedule.png', {root: __dirname});
});


app.get('/', (req, res) => {
  res.sendFile('./homePage.png', {root: __dirname});
});

app.get('/ookla', (req, res) => {
  res.sendFile('./homePage.png', {root: __dirname});
});

app.listen(2090, () => {
  console.log('Server listening on port 2090');
});