import React, { useState, useEffect }  from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from '../containers/Main.container';
import Navbar from '../components/Navbar.component';
import Subpage from "../components/Subpage.component";
import NotFound from "../components/NotFound.component";
import payload from '../API';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

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

    // adding routing to app

    return (
      <HashRouter>    
        <Navbar /> 
        <Switch> 
            <Route path="/" exact render={(props) => <Main {...props} products={products} loading={loading} error={error} />}/>   
            <Route path="/subpage/:name" component={Subpage} /> 
            <Route path="*" component={NotFound} />             
        </Switch>       
      </HashRouter>                                   
    )
};

export default App;