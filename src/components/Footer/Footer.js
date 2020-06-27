import React from 'react';
import './Footer.css';
import logo from '../../logo.png';

const Footer = () => {
    return (
        <div className="footerArea">
            <div className="footerTop">
                <div className="footerLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="otherInfo">
                    <ul>
                        <li><a href="#"> About online food</a></li>
                        <li><a href="#">Read our blog</a></li>
                        <li><a href="#">Sign up to deliver</a></li>
                        <li><a href="#">Add your restaurant</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Get help</a> </li>
                        <li><a href="#">Read FAQs</a> </li>
                        <li><a href="#">View all cities</a> </li>
                        <li><a href="#">Restaurant near me</a></li>
                    </ul>
                </div>
            </div>
            <div className="footerBottom">
                <p>Copyright © 2020 Online Food.</p>
                <div className="policy">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Pricing</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;