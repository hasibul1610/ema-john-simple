import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;

    for(const product of cart){
        total = total + product.price;
    }

    return (
        <div>
            <h2>Order Sumary</h2>
            <h3>Items Orderes: {props.cart.length}</h3>
            <br />
            <br />
            <p>Total: {total}</p>
            
        </div>
    );
};

export default Cart;