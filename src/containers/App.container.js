import { hot } from 'react-hot-loader';
import React from 'react';
import Navbar from '../components/Navbar.component';
import Main from './Main.container';

const App = () => {
    return (
        <div>
            <Navbar /> 
            <Main />
        </div>
    )
};

export default hot(module)(App);