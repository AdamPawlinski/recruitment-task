import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { Route } from 'react-router';
import ProductList from './ProductList.container';
import ProductItem from '../components/ProductItem.component';
// import api from '../API';

let payload = {
    token: "rRBSvsILbnIJ8LJkuCyWAg",
    "parameters": {
        delay: 2
    },
    data: {
        productName: "productName",
        stringShort: "stringShort",
        stringLong: "stringLong",
        personAvatar: "personAvatar",
        numberFloat: "numberFloat|100,1000|2",
        _repeat: 3
    }
}

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        axios({
            method: "post",
            url: "https://app.fakejson.com/q",
            data: payload    
          }).then(resp => { 
            setProducts(
                resp.data
            );    
          })
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
        setLoading(false);
        return () => setProducts([]);
    }, [])

    return (
        error ? (
            <div className="subpage-container">Something went wrong. Error: {error.response.status} </div>
        ) : (  
            <ProductList id="product-list" products={products} loading={loading} match={props.match} />  
        )                    
    )
};

export default Main;