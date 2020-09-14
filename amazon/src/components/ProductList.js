import React from 'react';
import Product from './Product';

const ProductList =(props)=>{
        
    const products = [
        {
            name:"iPhone 1",
            price:"10000",
            imageUrl:"https://images.macrumors.com/t/M6OOZi1LBirkudS4HQ3yibhQqgY=/800x0/filters:quality(90)/article-new/2017/09/iphonexdesign.jpg?lossy"
        },
        {
            name:"iPhone 2",
            price:"20000",
            imageUrl:"https://images.macrumors.com/t/M6OOZi1LBirkudS4HQ3yibhQqgY=/800x0/filters:quality(90)/article-new/2017/09/iphonexdesign.jpg?lossy"
        },
        {
            name:"iPhone 3",
            price:"30000",
            imageUrl:"https://images.macrumors.com/t/M6OOZi1LBirkudS4HQ3yibhQqgY=/800x0/filters:quality(90)/article-new/2017/09/iphonexdesign.jpg?lossy"
        }
    ];

    const handleClick =(data)=>{
        console.log(data);
        props.updateCart(data);
    }
    return ( <div className="row">
                
                {products.map((item,index)=>{
                    return(
                        <Product productDetails={item} update={handleClick}/>
                    );
                })}
            </div>
    );    
}

export default ProductList;