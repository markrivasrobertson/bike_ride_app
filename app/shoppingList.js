const request = require('superagent');

class ShoppingList {
  constructor() {
    this.url = 'https://shopping-list-app-95125.firebaseio.com/.json';
  }
  getList() {
    request.get(this.url)
      .then((response) => {
        return response;
      })
  }
  addToList() {
    request.patch(this.url)
  }
}

module.exports = ShoppingList;
