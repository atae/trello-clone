import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      currentInput: '',
      listItems: ['banana', 'monkeys', 'more stuff']
    };

    this.addToListItem = this.addToListItem.bind(this)
  }

  addToListItem(value) {
    let newArray = this.state.listItems;
    newArray = newArray.concat(value);
    this.setState({listItems: newArray});
  }

  render() {
    console.log(this.state.currentInput);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {this.state.listItems.map((el) => {
            return (<li>{el}</li>)
          })}
        </ul>
        <input type="text" value={this.state.currentInput} onChange={ e => {
          this.setState({currentInput: e.currentTarget.value})
        }}/>
        <button onClick={() => {this.addToListItem(this.state.currentInput)}}> Add To List</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
