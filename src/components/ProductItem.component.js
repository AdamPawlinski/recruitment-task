import React from 'react';

const ProductItem = ({ products, addProduct, match, ...props }) => {
    const productToRender = products.find(
            item => item.Product.productName === match.params.name
        ) 

    return ( 
        <React.Fragment>
            {
                productToRender ? (
                    <div className="product-item">
                        {console.log(productToRender, props)}
                        <img src={productToRender.personAvatar} alt="product" /> 
                        <div className="product-details">                 
                            <h3>{product}</h3>
                            <h4>${productToRender.numberFloat}</h4>
                            <p>{productToRender.stringLong}</p>
                            <button type="button" name="add product" value={productToRender} onClick={(productToRender)=> addProduct(productToRender)}>Add to Cart</button>         
                        </div>   
                    </div> 
                ) : (
                    <div>
                        Sorry. There is no such product.
                    </div>
                ) 
            }
        </React.Fragment>        
    )
};

export default ProductItem;