import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      position:1
    }
  }
  increment(){
    var position = this.state.position
    if (position < 100){
      this.setState({position:++position})
    }
  }
  decrement(){
    var position = this.state.position
    if (position > 1){
      this.setState({position:--position})
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.decrement.bind(this)} id="dec">-</button>
        <input type="text" value={fizzbuzz(this.state.position)} id="txtInput"></input>
        <button onClick={this.increment.bind(this)} id="inc">+</button>
      </div>
    );
  }
}


function fizzbuzz(val){
  var resp = val
  if (val % 3 === 0)
    if (val % 5 ===0)
      resp = "Fizzbuzz"
    else  
      resp = "Fizz"
  else if (val % 5 ===0)
    resp = "Buzz"
  
    return resp;
}

export default App;
