import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import HomeGallery from './HomeGallery';
import PhotoContainer from './PhotoContainer';

function MainContainer() {    
    return (
        <Switch>
            <Route exact path="/">
                <HomeGallery />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/:category">
                <PhotoContainer />
            </Route>
        </Switch>
    )
}

export default MainContainer;