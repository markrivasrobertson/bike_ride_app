const express = require('express');
const bodyParser = require('body-parser');
const ShoppingList = require('./shoppingList.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  const shoppingList = new ShoppingList();
  console.log(shoppingList);
  shoppingList.getList().then((list) => {
    response.status(200).send(list);
  });
});

app.patch('/', (request, response) => {
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
