import React from 'react';

// added product data rendering on the list

const CartItem = ({ product }) => {
    return (
        <div className="cart-item">        
            <span>${product.numberFloat}</span>
            <span>{product.productName}</span>
        </div>
    )
};

export default CartItem;