import React from 'react';
import Product from '../components/Product.component';
import Loading from '../components/Loading.component';

const ProductList = (props) => {
    return (
        <React.Fragment>
        {
            !props.loading ? (
                <article className="product-container">
                    {props.products.map(
                        (product, index) => <Product index={index} product={product} handleClick={props.handleClick}/>
                    )}
                </article>
                ) :(
                <Loading />
            )
        }
        </React.Fragment>
    )    
};

export default ProductList;