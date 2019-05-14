import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ products, match }) => {
    return (
        products.map(
            (product, index) => {
                <div className="product-card" key={index}>
                    <Link to={`${match.url}/${product.productName}`}>
                        <div>
                            <img src={product.personAvatar} alt={`${product.productName} product image`} />
                            <h3>{product.productName}</h3>                    
                            <p>{product.stringShort}</p>
                        </div>
                    </Link>
                </div>
            }
        )
    )
};

export default Product;