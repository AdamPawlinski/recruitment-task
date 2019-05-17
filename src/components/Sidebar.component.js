import React from 'react';
import Cart from '../containers/Cart.container';

// main component for sidebar renders main layout and cart component or empty cart message

const Sidebar = ({ addedProducts }) => {

    return (
        <aside className="sidebar-container">
            <div className="sidebar">
                <div>
                    <div className="sidebar-header">
                        <i className="far fa-address-book"></i>
                        <h2>Contact</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vestibulum dolor. In blandit elit eget magna tempor, a varius est bibendum. 
                    </p>
                </div>
                <div>
                    <div className="sidebar-header">
                        <i className="fas fa-shopping-cart"></i>
                        <h2>Cart</h2>
                        <span>(number)</span>
                    </div>
                    <Cart addedProducts={addedProducts}/>                                        
                </div> 
            </div>           
        </aside>
    )
};

export default Sidebar;