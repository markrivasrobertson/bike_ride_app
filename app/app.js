const express = require('express');
const bodyParser = require('body-parser');
const shoppingList = require('./shoppingList.js');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
  shoppingList.getList().then((list) => {
    response.status(200).send(list);
  });
});

app.post('/', (request, response) => {
  shoppingList.addToList().then((list) => {
    response.status(204).send();
  })
})
