import React from 'react';


const Navbar = () => {
    return (        
        <header className="header-container">
            <a href="#"><img className="logo" src="..\assets\images\logo.PNG" alt="logo" /></a>
            <div className="nav-container">
                <nav> 
                    <ul className="navbar-list">
                        <li className="navbar-link"><a href="#">Home</a></li>
                        <li className="navbar-link"><a href="#">About</a></li>
                        <li className="navbar-link"><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <i className="fas fa-search nav-search"></i>
            </div>
        </header>        
    )
};

export default Navbar;