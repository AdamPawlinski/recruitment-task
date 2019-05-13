import React from 'react';

const CartItem = ({product, index}) => {
    return (
        <div className="cart-item" key={index}>        
            <span>${product.numberFloat}</span>
            <span>{product.productName}</span>
        </div>
    )
};

export default CartItem;