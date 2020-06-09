const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const TOKEN = require('../utility');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(bodyParser.json())


app.get('/api/recipes/:food', (req, res) =>{
  const food = req.params.food;
  axios.get('https://api.edamam.com/search',{
    params: {
      q: food,
      app_id: TOKEN.id,
      app_key: TOKEN.key
    }
  })
    .then((results) => {
      res.send(results.data.hits);
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.end();
    })
})
app.listen(3001, () => {
  console.log('app on...');
})