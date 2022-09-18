const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(cors());
var bodyParser = require('body-parser')

app.get('/temperature/:id', (req, res) => {
  fetch(
    `https://temperature-sensor-service.herokuapp.com/sensor/${req.params.id}`
  )
    .then((response) => response.json())
    .then((response) => res.send(response));
});


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var tempObjList = [];
app.post('/temperature/multiple', jsonParser, function (req, res) {
  console.log(req.body.ids);

  var ids = req.body.ids;
  var bodyIdsLength = req.body.ids.length;
  var tempsBool = false;
  var currentIte = 0;
  ids.forEach((id) => {

    fetch(
      `https://temperature-sensor-service.herokuapp.com/sensor/${id}`
    )
    .then((response) => response.json())
    .then((response) => tempObjList.push(response));
    
       
  });



  var intervalId = setInterval(() => {
    console.log(tempObjList);
    res.send(tempObjList);

    clearInterval(intervalId);
    tempObjList = [];
  }, 2000);


})

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});
