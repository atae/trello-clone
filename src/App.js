import React, { Component } from 'react';
import logo from './logo.svg';
import ListIndex from './components/listIndex/listIndex';
import './App.css';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      currentInput: '',
      searchValue: '',
      currentBackground: 'white',
      listItems: ['banana', 'monkeys', 'more stuff']
    };

    this.addToListItem = this.addToListItem.bind(this)
  }

  addToListItem(value) {
    let newArray = this.state.listItems;
    newArray = newArray.concat(value);
    this.setState({listItems: newArray});
  }

  changeBackgroundColor = (e) => {
    let backgroundColor = e.currentTarget.innerHTML;
    this.setState({currentBackground: backgroundColor});
  }

  render() {
    return (
      <div className="App" style={{ 'backgroundColor' : this.state.currentBackground }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ListIndex 
          changeBackgroundColor = {this.changeBackgroundColor}
          listItems={this.state.listItems} 
          searchValue={this.state.searchValue}/>
        <input type="text" value={this.state.currentInput} onChange={ e => {
          this.setState({currentInput: e.currentTarget.value})
        }}/>
        <button onClick={() => {this.addToListItem(this.state.currentInput)}}> Add To List</button>
        <input type="text" value={this.state.searchValue} onChange={e => {
          this.setState({ searchValue: e.currentTarget.value })
        }} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App;
