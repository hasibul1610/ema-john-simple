import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="nav-bar">
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </nav>
                <div className="search-box">
                    <input type="text" placeholder="Type here to Search" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;