import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ index, product, handleClick }) => {
    return (
        <div className="product-card" key={index}>
            <Link to="/product">
                <div onClick={() => handleClick(product)}>
                    <img src={product.personAvatar} alt={`${product.productName} product image`} />
                    <h3>{product.productName}</h3>                    
                    <p>{product.stringShort}</p>
                </div>
            </Link>
        </div>
    )
};

export default Product;