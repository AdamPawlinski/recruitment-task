import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar.component';
import Main from '../containers/Main.container';
import NotFound from "../components/NotFound.component";
import Subpage from "../components/Subpage.component";

export default (
    <HashRouter>        
        <Route path="/" component={Navbar} />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={Subpage} />
            <Route path="/contact" component={Subpage} />                   
            <Route path="*" component={NotFound} /> 
        </Switch>       
    </HashRouter>
);