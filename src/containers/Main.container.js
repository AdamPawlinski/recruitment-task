import React from 'react';
import Sidebar from '../components/Sidebar.component';
import ProductList from './ProductList.container';

const Main = () => {
    return (
        <section className="main-container">
            <Sidebar />
            <ProductList />
        </section>
    )
};

export default Main;