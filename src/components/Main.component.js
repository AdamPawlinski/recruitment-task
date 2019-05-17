import React  from 'react';
import ProductList from '../containers/ProductList.container';

// component renders error or generates component containing list of products

const MainLayout = ({ error, products, loading }) => {    
    return (
        error ? (
            <div className="subpage-container">Something went wrong. Error: {error.response.status} </div>
        ) : (  
            <ProductList id="product-list" products={products} loading={loading} />  
        ) 
    )
};

export default MainLayout;