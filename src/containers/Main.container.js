import React from 'react';
import Sidebar from '../components/Sidebar.component';
import ProductList from './ProductList.container';

const Main = () => {
    return (
        <div>
            <Sidebar />
            <ProductList />
        </div>
    )
};

export default Main;