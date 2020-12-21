import React from 'react';
import './Header.css';
import logo from '../../logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link , NavLink} from 'react-router-dom';
import { useAuth } from '../Authentication/useAuth';

const Header = () => {
    const auth = useAuth();
    console.log(auth);

    if(auth.user){
        var style = {
            border: 'none',
            backgroundColor: 'white',
            marginLeft: '-40px',
        }
       
    }else{
        var style = {
            position : "absolute",
            left: "1380px",
            border: 'none',
            backgroundColor: 'white'
        } 
    }

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                     <img src={logo} alt="" />
                </Link>
            </div>
            <div className="manageUser">
                <ul style={{ display: 'flex' }}>
                  {
                     <li>
                        <NavLink to="/cart">
                            <button style={style}><FontAwesomeIcon icon={faShoppingCart} /></button>
                        </NavLink>
                     </li>
                  } 
                    {/* {/* <li><a href="#" className="logIn">Login</a></li> */}
                { 
                    auth.user &&
                   <li> <span style={{ color: 'black' }}><span style={{ color: 'black'}}>Welcome, </span>{auth.user.name}</span>  </li> 
                }
                
                    <li>
                        <NavLink to="/login">
                           {auth.user ? <a href="login" className="btn-danger signUpBtn">Sign Out</a> : <a href="login" className="btn-danger signUpBtn btnPostion">Sign In</a>}
                        </NavLink>
                    </li> 
                </ul>
            </div>
        </div>
    );
};

export default Header;