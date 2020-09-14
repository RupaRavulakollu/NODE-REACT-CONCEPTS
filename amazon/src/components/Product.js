import React from 'react';

const Product = (props) => {

    return (<div className="col-md-3">
            <div className="card" >
                <img className="card-img-top" src={props.productDetails.imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{props.productDetails.name}</p>
                    <p className="card-text">{props.productDetails.price}</p>
                    <button onClick={
                        (e)=>{
                            props.update(props.productDetails);
                        }
                    } className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    </div>
    );
}
export default Product;

