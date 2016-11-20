import React, { Component } from 'react';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    }
  }
  render() {
    const items = ['toilet paper', 'paper towels', 'milk', 'eggs', 'veggies', 'coffee', 'cereal', 'juice', 'butter', 'bread', 'chips'];
    const itemOptions = items.map((item) => {
      const newOption = document.createElement('option');
      newOption.value = `${item}`
      newOption.text = `${item}`
    });
    const shoppingList = this.state.list.map((item) => {
      const newListItem = document.createElement('h1');
      newListItem.text = `${item}`;
    });
    return (
      <div>
        <div id="itemList">
          {
            shoppingList
          }
        </div>
        <div id="addItem">
          <select>
            {
              itemOptions
            }
          </select>
          <button>Add to the List</button>
        </div>
      </div>
    );
  }
}

export default App;
