import React  from 'react';
import Sidebar from '../components/Sidebar.component';
import ProductList from '../containers/ProductList.container';

// component renders error or generates component containing list of products

const MainLayout = ({ error, products, loading, addedProducts }) => {    
    return (
        error ? (
            <div className="subpage-container">Something went wrong. Error: {error.response.status} </div>
        ) : (
            <section className="main-container"> 
                <Sidebar addedProducts={addedProducts}/>  
                <ProductList id="product-list" products={products} loading={loading} />  
            </section> 
        ) 
    )
};

export default MainLayout;