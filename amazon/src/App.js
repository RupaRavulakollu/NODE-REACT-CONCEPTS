import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register';
import ProductComponent from './components/Products';
import ProductList from './components/ProductList';

export class App extends Component {

  
  //const API_KEY = "API_KEY";  
  constructor(){
    super();
    this.state={
      companyName:"Pega Systems",
      cartCount:0,
    }
  }

  handleClick=(data)=>{
    console.log(data);
    this.setState({
      cartCount:this.state.cartCount+1
    })
  };
  render(){
    return (
      <div>
          <Header title={this.state.companyName} cartCount={this.state.cartCount}/>
          
          <ProductList updateCart={this.handleClick}/>
      </div>
    );
  }
  
};

export default App;





