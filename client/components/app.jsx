import React, { Component } from 'react';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: {
        milk: false,
        eggs: false,
        veggies: false,
        coffee: false,
        cereal: false,
        juice: false,
        butter: false,
        bread: false,
        chips: false,
      },
      options: [],
    };
    this.addItem = this.addItem.bind(this);
  }
  componentDidMount() {
    const items = ['milk', 'eggs', 'veggies', 'coffee', 'cereal', 'juice', 'butter', 'bread', 'chips'];
    const newList = request.get('https://shopping-list-app-95125.firebaseio.com/.json');
    this.setState({
      list: newList,
      options: items,
    });
  }
  addItem() {
    const itemToAdd = document.getElementById('selectMenu').value;
    const newList = this.state.list;
    newList[itemToAdd] = true;
    this.setState({
      list: newList,
    });
  }
  render() {
    const itemsList = Object.keys(this.state.list);
    const shoppingList = [];
    itemsList.forEach((item) => {
      if (this.state.list[item]===true) {
        shoppingList.push(item);
      }
    });
    const displayShoppingList = shoppingList.map((item, idx) => {
      if (this.state.list[item]===true) {
        return (
          <h2 key={idx}>
            {item}
          </h2>
        );
      }
    });
    const itemOptions = this.state.options.map((item, idx) => {
      return (
        <option value={item} key={idx}>
          {item}
        </option>
      );
    });
    return (
      <div>
        <div id="itemList">
          {
            displayShoppingList
          }
        </div>
        <div id="addItem">
          <select id="selectMenu">
            {
              itemOptions
            }
          </select>
          <button onClick={this.addItem}>Add to the List</button>
        </div>
      </div>
    );
  }
}

module.exports = App;
