import React from 'react';

const ProductItem = () => {
    return (        
        <div className="product-item">
            <img src="" alt="product" />
            <div className="product-details"> 
                <h3>Title</h3>
                <p>description</p>
                <button type="button" name="add product" value="">Add to Cart</button>         
            </div>   
        </div>        
    )
};

export default ProductItem;