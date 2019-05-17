import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// individual product component with link to product item

const Product = ({ product }) => {
    return (              
        <div className="product-card">   
            <Link to={`/product/${product.productName}`}>
                <div>
                    <img src={product.personAvatar} alt={`${product.productName} product image`} />
                    <h3>{product.productName}</h3>                    
                    <p>{product.stringShort}</p>
                </div>
            </Link>
        </div>
    )    
};

Product.propTypes = {
    product: PropTypes.shape({
        productName: PropTypes.string.isRequired,
        stringShort: PropTypes.string.isRequired,
        stringLong: PropTypes.string.isRequired,
        personAvatar: PropTypes.string.isRequired,
        numberFloat: PropTypes.number.isRequired
    })    
}

export default Product;