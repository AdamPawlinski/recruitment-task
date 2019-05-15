import { hot } from 'react-hot-loader';
import React from 'react';
import router from '../router';

const App = () => {
    return (
        <div> 
            {router}
        </div>
    )
};

export default hot(module)(App);