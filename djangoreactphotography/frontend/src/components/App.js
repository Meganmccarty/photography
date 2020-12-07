import React from 'react';
import Navbar from './Navbar.js';
import Gallery from './Gallery.js';
import About from './About.js';
import Butterflies from './Butterflies.js';
import Plants from './Plants.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render () {
        return (
            <div className="Main-container">
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Gallery} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/butterflies" component={Butterflies}/>
                        <Route path="/plants" component={Plants}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
