import React, { useState, useEffect }  from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../assets/styles/main.scss';
// import Main from '../containers/Main.container';
import Navbar from '../components/Navbar.component';
import MainLayout from '../components/Main.component';
import ProductItem from '../components/ProductItem.component';
import Subpage from "../components/Subpage.component";
import NotFound from "../components/NotFound.component";
import payload from '../API';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [addedProducts, addingProduct] = useState([]);

    
  // data fetching utilizing fakejson.com api

    useEffect(() => {        
        axios({
          method: "post",
          baseURL: "https://app.fakejson.com/q",
          data: payload 
        })
        .then(
          (response) => {
            setProducts(response.data)
          }  
        )
        .then(
          () => {
            setLoading(false)
          }          
        )
        .catch(
          error => {                
              setError(error);
              if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log('Error: ', error.message);                   
                }
                console.log(error.config);         
          }
        );      
      return () => setProducts([]);
    }, [])

    const addProduct = (product) => {
      let add = addedProducts.concat(product);          
      addingProduct(add);
    }

    // adding routing to app

    return (
      <HashRouter>    
        <Navbar /> 
        <Switch> 
            <Route path="/" exact render={(props) => <MainLayout {...props} loading={loading} error={error} products={products} addedProducts={addedProducts} /> }/>   
            <Route path="/product/:name" render={(props) =><ProductItem {...props} products={products} addProduct={addProduct}  addedProducts={addedProducts} />} />
            <Route path="/subpage/:name" component={Subpage} /> 
            <Route path="*" component={NotFound} />             
        </Switch>       
      </HashRouter>                                   
    )
};

export default App;