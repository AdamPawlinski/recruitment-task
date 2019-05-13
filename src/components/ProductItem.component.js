import React from 'react';

const ProductItem = ({product, addProduct}) => {
    return (        
        <div className="product-item">
            <img src="" alt="product" />
            <div className="product-details"> 
                <h3>{product.productName}</h3>
                <h4>${product.numberFloat}</h4>
                <p>{product.stringLong}</p>
                <button type="button" name="add product" value={product} onClick={()=> addProduct(product)}>Add to Cart</button>         
            </div>   
        </div>        
    )
};

export default ProductItem;