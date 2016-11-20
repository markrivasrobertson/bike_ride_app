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
  const newItem = request.body;
  shoppingList.addToList(newItem).then((serverResponse) => {
    response.status(204).send();
  })
  .catch((error) => {
    console.error(error);
    response.status(500).send();
  });
});

module.exports = app;
