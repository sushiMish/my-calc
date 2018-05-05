import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {

  handleClick = () => {
    let in1 = parseInt(this.input1.value, 10);
    let in2 = parseInt(this.input2.value, 10);
    switch(this.op.value){
      case '+': this.setState({result: in1 + in2});
        break;
      case '-': this.setState({result:in1-in2});
        break;
      case 'x': this.setState({result:in1*in2});
        break;
      case '/': this.setState({result:in1/in2});
        break;
    } 
  }

  constructor(){
    super();
    this.state = {
      result: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Calculator</h1>
        </header>
        <p className="App-intro">
          <input ref={input => this.input1 = input} type="number"/>
          <select ref={input => this.op = input}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">/</option>
          </select>
          <input ref={input => this.input2 = input} type="number"/>
          <button onClick={this.handleClick}>=</button>
          <label>{this.state.result}</label>
        </p>
      </div>
    );
  }
}

export default App;
