import React from 'react';
import './Header.css';
import logo from '../../logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="manageUser">
                <ul style={{display:'flex'}}>
                    <li><button className="cartIcon"><FontAwesomeIcon icon={faShoppingCart} /></button></li>
                    <li><a href="#" className="logIn">Login</a></li>
                    <li><a href="#" className="btn-danger">Sign Up</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;