import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (        
        <header className="header-container">
            <Link to="/"><img className="logo" src="..\assets\images\logo.PNG" alt="logo" /></Link>
            <div className="nav-container">
                <nav> 
                    <ul className="navbar-list">
                        <li className="navbar-link"><Link to="/">Home</Link></li>
                        <li className="navbar-link"><Link to="/about">About</Link></li>
                        <li className="navbar-link"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <i className="fas fa-search nav-search"></i>
            </div>
        </header>        
    )
};

export default Navbar;