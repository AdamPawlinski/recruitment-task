import React from 'react';
import Product from '../components/Product.component';
import Loading from '../components/Loading.component';

const ProductList = (props) => {
    return (
        <React.Fragment>
        {
            !props.loading ? (
                <article className="product-container">
                    <Product />
                </article>
                ) :(
                <Loading />
            )
        }
        </React.Fragment>
    )    
};

export default ProductList;