import React from 'react';
import CartItem from '../components/CartItem.component';

const Cart = ({products}) => {
    return (
        <div className="cart-container">
            {
                products.map(
                    (product, index) => <CartItem product={product} index={index}/>
                )
            }
        </div>
    )
};

export default Cart;