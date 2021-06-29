import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import HomeGallery from './HomeGallery';

function MainContainer() {
    return (
        <Switch>
            <Route exact path="/">
                <HomeGallery />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    )
}

export default MainContainer;