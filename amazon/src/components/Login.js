import React,{Component} from 'react';
import Dropdown from './Dropdown';

class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }
    handleChange = (text)=>{
        console.log(text.target.value);
        let currentState= this.state;
        currentState[text.target.name] = text.target.value;
        this.setState(currentState);
    }

    render(){
        const inpStyle={
            marginLeft:10,
            width:400
        };
        const divStyle={
            marginLeft:20,
        };

        var dropData = ["Abc","XYZ","DEF"];
        var namesData = ["Rupa","Sai","Sree"];
        return(
            <div>
                    <h3 style={divStyle}>Login </h3>
                    <input type="text" class="form-control" style={inpStyle} placeholder="User Name" name="username" onKeyPress={this.handleChange}/> 
                    <br></br> 
                    <input type="text" class="form-control" style ={inpStyle} placeholder="Password" name="password" onKeyPress={this.handleChange}/>
                    <h2>{this.state.username}</h2>
                    <br></br>
                    <Dropdown list={dropData} />
                    <Dropdown list={namesData}/>
            </div>
        );
    }
}

export default LoginComponent;

