import React from 'react';
import CartItem from '../components/CartItem.component';

// maps product added to cart from addedProducts property

const Cart = ({ addedProducts }) => {
    return (
        <div className="cart-container">
            {
                addedProducts.length === 0 ? (
                    <span>Cart is empty</span>                                                            
                ) : (
                    addedProducts.map(
                        product => <CartItem product={product} key={product.productName}/>
                    )
                )                    
            }
        </div>
    )
};

export default Cart;