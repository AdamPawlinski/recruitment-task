import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ products, addProduct, ...props }) => {   

    const productToRender = products.find(
            item => item.productName === props.match.params.name
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

ProductItem.propTypes = {
    products: PropTypes.shape({
        productName: PropTypes.string.isRequired,
        stringLong: PropTypes.string.isRequired,
        personAvatar: PropTypes.string.isRequired,
        numberFloat: PropTypes.number.isRequired
    })    
}

export default ProductItem;