import React from 'react';
import Product from '../components/Product.component';
import Loading from '../components/Loading.component';


// component maps products from fake api or shows loading indicator

const ProductList = ({ products, loading }) => {

    return (
        <div className="product-container">      
            {
                !loading ? (
                    products.map(             
                        (product, index) => (  
                            <Product key={index} product={product} />
                        )
                    ) 
                ) : (
                    <Loading />
                )
            }
        </div>
    )    
};

export default ProductList;