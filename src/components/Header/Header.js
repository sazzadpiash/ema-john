import React from 'react';
import './Header.css';
import logo from './../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
            <div className="header-inner">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;