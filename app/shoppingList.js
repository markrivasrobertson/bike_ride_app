const request = require('superagent');

class ShoppingList {
  constructor() {
    this.url = 'https://shopping-list-app-95125.firebaseio.com/.json';
  }
  getList() {
    return request.get(this.url)
      .then((response) => {
        return response.text;
      });
  }
  addToList({ list }) {
    request.patch(this.url)
  }
}

module.exports = ShoppingList;
