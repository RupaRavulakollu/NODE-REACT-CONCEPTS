import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import TextBox from './components/TextBox';

// export class App extends Component {
  
//   constructor(){
//     super();
//     this.state={
//       count:0
//     }
//   }
//   handleClick=()=>{
//     this.setState(
//       {count: this.state.count +1 }
//     );
//   }

//   handleDec=()=>{
//     this.setState(
//       { count: this.state.count -1 }
//     );
//   }

//   render(){
//     return (
//       <div className="App">
//         {/* <Counter count={this.state.count}/>
//         <Button clickButton={this.handleClick} type="increment"/>
//         <Button clickButton={this.handleDec} type="decrement"/> */}
//         <TextBox /> 
//       </div>
//     );
//   }
  
// }; 


const ThemeContext = React.createContext('light');

export class App extends React.Component {
  render() {
   
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
        <input type="text" disabled={false}/>
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <button  >{this.context}</button>;
  }
};