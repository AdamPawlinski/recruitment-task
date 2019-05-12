import React, { useState, useEffect }  from 'react';
import Sidebar from '../components/Sidebar.component';
import ProductList from './ProductList.container';
import API from '../API';

const Main = (props) => {
    const data = props.API.data;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProducts(data);
        setLoading({loading: false})
    }, [])

    return (
        <section className="main-container">
            <Sidebar />
            {console.log(API)}
            <ProductList products={products} loading={loading}/>
        </section>
    )
};

export default Main;