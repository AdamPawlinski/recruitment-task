import React from 'react';

const ProductItem = ({ products, match, ...props }) => {
    const [addedProduct, addingProduct] = useState();

    const productToRender = products.find(
            item => item.productName === match.params.name
        ) 

    return ( 
        <React.Fragment>
            <Sidebar product={addedProduct}/>
            {
                productToRender ? (
                    <div className="product-item">
                        {console.log(productToRender, props)}
                        <img src={productToRender.personAvatar} alt="product" /> 
                        <div className="product-details">                 
                            <h3>{product}</h3>
                            <h4>${productToRender.numberFloat}</h4>
                            <p>{productToRender.stringLong}</p>
                            <button type="button" name="add product" value={productToRender} onClick={(productToRender)=> addingProduct(productToRender)}>Add to Cart</button>         
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