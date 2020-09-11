import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register';
import ProductComponent from './components/Products';

function App() {

  const API_KEY = "API_KEY";
  const companyName = 'Pega Systems';
  return (
    <div>
        <Header title={companyName}></Header>
        
        {/* <LoginComponent />
        <RegisterComponent /> */}

        <ProductComponent API_KEY={API_KEY} />
    </div>
  );
}


export default App;
