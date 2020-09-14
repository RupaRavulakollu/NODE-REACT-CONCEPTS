import React from 'react';

const Cart = (props) => {

    return (<div>
        <a className="nav-link" href="#">Cart {props.cartCount}</a>
    </div>
    );
}
export default Cart;