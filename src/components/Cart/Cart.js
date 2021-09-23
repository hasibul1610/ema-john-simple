import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shippingTotal = 0;

    for(const product of cart){
        total = total + product.price;
    }
    for(const product of cart){
        shippingTotal = shippingTotal + product.shipping;
    }

    const tax = total * 0.2 ;
    const subTotal = total+ shippingTotal;
    const totalWithTax = subTotal + tax;

    return (
        <div>
            <h2>Order Sumary</h2>
            <h3>Items Orderes: {props.cart.length}</h3>
            <br />
            <br />
            <p>Total: {total}</p>
            <p>Shipping Total: {shippingTotal}</p>
            <h4>Sub Total: {subTotal}</h4>
            <h4>Estimated Tax: {tax}</h4>
            <h4>Total: {totalWithTax}</h4>
            
        </div>
    );
};

export default Cart;