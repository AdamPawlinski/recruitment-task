import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../assets/styles/main.scss';
import Sidebar from '../components/Sidebar.component';
import MainLayout from '../components/Main.component';
import ProductItem from '../components/ProductItem.component';

// addProduct sends props from ProductItem to state in addedProducts property which is then send to Cart

const Main = ({ loading, error, products }) => {
    const [addedProducts, addingProduct] = useState();

    const addProduct = (product) => {
        addingProduct(product, ...productsAdded)
      }
    
    return (
        <section className="main-container"> 
            <Sidebar addedProducts={addedProducts}/>
            <Switch>
                <Route render={() => <MainLayout loading={loading} error={error} products={products} />} />
                <Route path={`/product/:name`} render={() =><ProductItem products={products} addProduct={(product)=> addProduct(product)}  />} />
            </Switch>
        </section>           
      )
  };

export default Main;