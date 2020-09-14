import React,{useState} from 'react';

const TextBox = ()=>{
    const [details,handleChange] = useState({
        firstName:"",
        lastname:"",

    });
    console.log(details);
    return (
        <div> 
            <input type="text" name="firtName" value ={details.firstName} onChange={
                (e)=>{
                    handleChange({...details,firstName:e.target.value})
                }
            }/>

            <input type="text" name="lastName" value ={details.lastname} onChange={
                (e)=>{
                    handleChange({...details,lastname: e.target.value})
                }
            }/>
            
            <h5>firstName:{details.firstName}</h5>
        </div>
    );
}
export default TextBox;