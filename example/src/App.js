import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import TextBox from './components/TextBox';

export class App extends Component {
  
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  handleClick=()=>{
    this.setState(
      {count: this.state.count +1 }
    );
  }

  handleDec=()=>{
    this.setState(
      { count: this.state.count -1 }
    );
  }

  render(){
    return (
      <div className="App">
        {/* <Counter count={this.state.count}/>
        <Button clickButton={this.handleClick} type="increment"/>
        <Button clickButton={this.handleDec} type="decrement"/> */}
        <TextBox /> 
      </div>
    );
  }
  
};


