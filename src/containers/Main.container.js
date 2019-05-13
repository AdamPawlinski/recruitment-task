import React, { useState, useEffect }  from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/Sidebar.component';
import ProductList from './ProductList.container';
import ProductItem from "../components/ProductItem.component";
// import api from '../API';

let payload = {
    token: "rRBSvsILbnIJ8LJkuCyWAg",
    "parameters": {
        delay: 1
    },
    data: {
        productName: "productName",
        stringShort: "stringShort",
        stringLong: "stringLong",
        personAvatar: "personAvatar",
        numberFloat: "numberFloat|100,1000|2",
        _repeat: 10
    }
}

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios({
            method: "post",
            url: "https://app.fakejson.com/q",
            data: payload    
          }).then(resp => { 
            setProducts(
                resp.data
            );
            console.log(resp.data);     
          })
          .catch(
            error => {
                console.log(error);
                setError(true);
            }
          );
        setLoading(false);
    }, [])

    const addProduct = (product) => product;
    const handleClick = (product) => <Route path="/product" component={ProductItem} product={product} addProduct={addProduct}/>;

    return (
        <section className="main-container">
            <Sidebar product={addProduct}/>
            { 
                location.pathname === '/product' ? (
                    handleClick()
                ) : (
                    error ? (
                        <div>Something went wrong. Error {error}</div>
                    ) : (                 
                        <ProductList products={products} loading={loading} error={error} handleClick={handleClick}/>
                    )                   
                )
            }
        </section>
    )
};

export default Main;