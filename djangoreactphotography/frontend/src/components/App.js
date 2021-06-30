import React from 'react';
import Navbar from './Nav/Navbar.js';
import CopyrightText from './CopyrightText';
import MainContainer from './MainContainer';

function App() {

    return (
        <div className="Main-container">
            <CopyrightText />
            <Navbar />
            <MainContainer />
        </div>
    )

}

export default App;
