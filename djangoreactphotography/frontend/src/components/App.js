import React from 'react';

// import Gallery from './Gallery.js';
// import About from './About.js';
// import Animals from './Animals.js';
// import Architecture from './Architecture.js';
// import Arthropods from './Arthropods.js';
// import Autumn from './Autumn.js';
// import Butterflies from './Butterflies.js';
// import Caterpillars from './Caterpillars.js';
// import Landscapes from './Landscapes.js';
// import Pets from './Pets.js';
// import Plants from './Plants.js';
// import Spring from './Spring.js';
// import Sunsets from './Sunsets.js';
// import Water from './Water.js';
// import Weather from './Weather.js';
// import Winter from './Winter.js';
import Navbar from './Nav/Navbar.js';
import CopyrightText from './CopyrightText';
import MainContainer from './MainContainer';

function App() {

    return (
        <div className="Main-container">
            <CopyrightText />
            <Navbar />
            <MainContainer/>
                {/* <Switch>
                    <Route path="/" component={Gallery} exact />
                    <Route path="/about" component={About} />
                    <Route path="/animals" component={Animals} />
                    <Route path="/architecture" component={Architecture} />
                    <Route path="/arthropods" component={Arthropods} />
                    <Route path="/autumn" component={Autumn} />
                    <Route path="/butterflies" component={Butterflies} />
                    <Route path="/caterpillars" component={Caterpillars} />
                    <Route path="/landscapes" component={Landscapes} />
                    <Route path="/pets" component={Pets} />
                    <Route path="/plants-and-flowers" component={Plants} />
                    <Route path="/spring" component={Spring} />
                    <Route path="/sunsets-and-skies" component={Sunsets} />
                    <Route path="/water" component={Water} />
                    <Route path="/weather" component={Weather} />
                    <Route path="/winter" component={Winter} />
                </Switch> */}
            
        </div>
    )

}

export default App;
