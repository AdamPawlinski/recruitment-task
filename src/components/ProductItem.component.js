import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar.component';
import PropTypes from 'prop-types';

const ProductItem = ({ products, addProduct, addedProducts, match }) => {   
    const [buttonState, setButtonState] = useState(true);
    const [productRenderState, setProductRenderState] = useState(true)

    useEffect(() => {
        products ? 
        setProductRenderState(true) :
        setProductRenderState(false)
    },[products])

    const productToRender = products.find(
            item => item.productName === match.params.name
        ) 
    
    const buttonHandler = () => {
        if (buttonState) {
            document.querySelector('#buttonState').innerText = 'Added';
            setButtonState(false);            
            addProduct(productToRender);
        } else {
            return
        }
    }
    
    return ( 
        <section className="main-container">
            <Sidebar addedProducts={addedProducts}/>
            {
                productRenderState ? (
                    <div className="product-item">                        
                        <img src={productToRender.personAvatar} alt="product" /> 
                        <div className="product-details">                 
                            <h3>{productToRender.productName}</h3>
                            <h4>${productToRender.numberFloat}</h4>
                            <p>{productToRender.stringLong}</p>
                            <button type="button" id="buttonState" name="add product" value={productToRender} 
                                onClick={() => buttonHandler()}>Add to Cart</button>         
                        </div>   
                    </div> 
                ) : (
                    <div>
                        We are sorry. There is no such product.
                    </div>
                ) 
            }
        </section>        
    )
};

ProductItem.propTypes = {
    products: PropTypes.array.isRequired   
}

export default ProductItem;