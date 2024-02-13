import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sticky-top'>
            <nav className="navbar navColor navbar-expand-lg">
                <div className="container">
                    <div className="logo">
                        <img src={logo} className='img-fluid' alt="logo" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto md-border-top">
                        <Link className="navLink" to="/home">Home</Link>
                        <Link className="navLink" to="/products">Products</Link>
                        <Link className="navLink" to="/contactus">Contact Us</Link>
                        <Link className="navLink" to="/cart"><i className="fa-solid fa-cart-shopping me-1"></i>Cart <sup>0</sup></Link>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;