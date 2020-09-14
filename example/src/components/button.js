import React from 'react';

const Button =(props)=>{
    return(
        <div>
            <button onClick={
                (e)=>{
                    props.clickButton()
                }
            }>{props.type}</button>
        </div>
    );
};
export default Button;