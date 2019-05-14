import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar.component';
import Main from '../containers/Main.container';
import NotFound from "../components/NotFound.component";
import Subpage from "../components/Subpage.component";

export default (
    <HashRouter>    
        <Navbar /> 
        <Switch>
            {/* <Redirect from="/" to="/main" /> */}
            <Route path="/" exact component={Main} />
            <Route path="/subpage/:name" component={Subpage} />                
            <Route path="*" component={NotFound} /> 
        </Switch>       
    </HashRouter>
);