import React, { Component } from 'react';
import axios from 'axios';

class ProductComponent extends Component{
    
    constructor(props){
        super();
        
        this.state={
            imageList:[],
        }
    }
    
    
    async componentDidMount(){
        let response = await axios('https://pixabay.com/api/?key='+this.props.API_KEY+'&q=yellow+flowers&image_type=photo&pretty=true');
        console.log(response);
        this.setState({imageList:response.data.hits});
    }
    bindImages=()=>{
        return this.state.imageList.map((item,index)=>{
            return <img src={item.previewURL} alt="Logo" />;
        });
    }
    render(){
        return(
            <div>
                <h1>Products</h1>
                {this.bindImages()}
                
                
            </div>
            
        );
    }
}


export default ProductComponent;