import React from 'react';
import './Header.css';
import logo from '../../logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link , NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                     <img src={logo} alt="" />
                </Link>
            </div>
            <div className="manageUser">
                <ul style={{ display: 'flex' }}>
                    <li>
                        <NavLink to="/cart">
                            <button className="cartIcon"><FontAwesomeIcon icon={faShoppingCart} /></button>
                        </NavLink>
                    </li>
                    {/* {/* <li><a href="#" className="logIn">Login</a></li> */}
                    <li>
                        <NavLink to="/Login">
                            <a href="#" className="btn-danger signUpBtn">Login</a>
                        </NavLink>
                    </li> 
                </ul>
            </div>
        </div>
    );
};

export default Header;