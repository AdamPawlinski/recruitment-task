import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar.component';
import Main from '../containers/Main.container';
import Sidebar from '../components/Sidebar.component';
import NotFound from "../components/NotFound.component";
import Subpage from "../components/Subpage.component";
import ProductItem from '../components/ProductItem.component';

export default (
    <HashRouter>    
        <Navbar /> 
        <Switch>
            <Route > 
            <section className="main-container"> 
                <Sidebar />
                <div className="product-container">
                    <Route path="/" render={Main}/>
                    <Route path="product/:name" component={ProductItem} /> 
                </div>
            </section>
            </Route>
            <Route path="/subpage/:name" component={Subpage} />                            
            <Route path="*" component={NotFound} /> 
        </Switch>       
    </HashRouter>
);