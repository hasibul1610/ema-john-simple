import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, seller, price, stock, img} = props.product;

    return (
        <div className="product-container">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h2>{name}</h2>
                <p><small>By: {seller}</small></p>
                <p>Price:{price}$</p>
                <p><small>Only {stock} items in stock</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="add-to-cart-btn">Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;