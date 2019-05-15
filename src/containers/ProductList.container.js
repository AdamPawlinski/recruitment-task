import React from 'react';
import { Route, Switch } from 'react-router';
import Product from '../components/Product.component';
import ProductItem from '../components/ProductItem.component';
import Loading from '../components/Loading.component';

const ProductList = ({ products, loading, addProduct, match, ...props }) => {

    return (
        <React.Fragment>      
            {
                !loading ? (
                        <div>
                            {console.log(products, match)}
                            <Route path={match.url} children={(props) => <Product products={products} {...props}/>} /> 
                        </div>
                    ) :(
                    <Loading />
                )
            }
        </React.Fragment>
    )    
};

export default ProductList;