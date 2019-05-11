import { hot } from 'react-hot-loader';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from '../components/Navbar.component';
import Main from './Main.container';
import router from '../router';

const App = () => {
    return (
        <div> 
            {router}
        </div>
    )
};

export default hot(module)(App);