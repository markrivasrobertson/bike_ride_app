import React, { Component } from 'react';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      options: [],
    };
    this.addItem = this.addItem.bind(this);
  }
  componentDidMount() {
    const items = ['toilet paper', 'paper towels', 'milk', 'eggs', 'veggies', 'coffee', 'cereal', 'juice', 'butter', 'bread', 'chips'];
    this.setState({
      options: items,
    });
  }
  addItem() {
    const itemToAdd = document.getElementById('selectMenu').value;
    const newList = this.state.list;
    newList.push(itemToAdd);
    this.setState({
      list: newList,
    });
  }
  render() {
    const shoppingList = this.state.list.map((item, idx) => {
      return (
        <h2 key={idx}>
          {item}
        </h2>
      );
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
            shoppingList
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
