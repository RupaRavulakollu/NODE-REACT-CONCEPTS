import React,{Component} from 'react';
import axios from 'axios';

class RegisterComponent extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
            email:"",
            age:"",
            firstName:"",
            lastName:"",
            gender:"",
            termsAndCond:false,
            countryList:[],
        }
        
    }

    async componentDidMount(){

        // fetch("").then( result =>{
        //     console.log(result);
        //     return result.json();
        // }).catch(err=>{
        //     console.log(err);
        // }).then(finalResult=>{
        //     console.log(finalResult);
        // })

        let response = await axios('https://restcountries.eu/rest/v2/all');
        this.setState({countryList:response.data});
    }

    bindDataToDropDown = ()=>{
        return this.state.countryList.map((item,index)=>{
                return <option value={item.alpha2Code}>{item.name}</option>
        })
    }

    handleChange = (event)=>{
        
        let currentState= this.state;
        if(event.target.name==="termsAndCond"){
            currentState[event.target.name] = event.target.checked;
        }else{
            currentState[event.target.name] = event.target.value;
        }
        this.setState(currentState);
        console.log(this.state);
    }

    render(){
        const inpStyle={
            marginLeft:10,
            width:450
        };
        const divStyle={
            marginLeft:20,
        };
        return(
            <div>   
                    <h3 style={divStyle}>Register</h3>
                    <form>
                            <div class="form-row" style={divStyle}>
                                <div class="form-group col-md-6">
                                <input type="text" class="form-control" style ={inpStyle} onChange={this.handleChange} placeholder="User Name" name="username" id="inputUName"/>
                                </div>

                                <div class="form-group col-md-6">
                                <input type="email" class="form-control" style ={inpStyle} onChange={this.handleChange} placeholder="Email" name="email" id="inputEmail"/>
                                </div> 
                            </div>

                            <div class="form-row" style={divStyle}>
                                <div class="form-group col-md-6">
                                <input type="text" class="form-control" style ={inpStyle} onChange={this.handleChange} placeholder="First Name" name="firstName" id="inputFName"/>
                                </div> 

                                <div class="form-group col-md-6">
                                <input type="text" class="form-control"  style ={inpStyle} onChange={this.handleChange} placeholder="Last Name" name="lastName" id="inputLName"/>
                                </div> 
                            </div>

                            <div class="form-row" style={divStyle}>
                                <div class="form-group col-md-6">
                                <input type="password" class="form-control" style ={inpStyle} onChange={this.handleChange} placeholder="Password" name ="password" id="inputPassword"/>
                                </div>

                                <div class="form-group col-md-6">
                                <input type="text" class="form-control" style ={inpStyle} onChange={this.handleChange} placeholder="Age" name="age" id="inputAge"/>
                                    <select name="country" id="countryList" onchange={this.handleChange}> 
                                    {this.bindDataToDropDown()}
                                    </select>
                                </div> 
                            </div>
                        <fieldset class="form-group" >
                            <div class="row" style={divStyle}>
                            <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                <input class="form-check-input" type="radio" onChange={this.handleChange} name="gender" id="gender1" value="Male" />
                                <label class="form-check-label" for="gender1">
                                    Male
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio"  onChange={this.handleChange} name="gender" id="gender2" value="Female"/>
                                <label class="form-check-label" for="gender2">
                                    Female
                                </label>
                                </div>
                                
                            </div>
                            </div>
                        </fieldset>
                        <div class="form-group row">
                            <div class="col-sm-2"></div>
                            
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" onChange={this.handleChange} name="termsAndCond"  value="Agree" id="termsAndCond"/>
                                <label class="form-check-label" for="termsAndCond">
                                    I Agree Terms and Conditions
                                </label>
                            
                            </div>
                        </div>
                        <div  style={{marginLeft:400}}>
                            <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </div>

                    
                    
                    </form>
            </div>
        );
    }
}

export default RegisterComponent;

