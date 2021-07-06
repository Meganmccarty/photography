import React from 'react';
import Navbar from './Nav/Navbar.js';
import CopyrightText from './CopyrightText';
import MainContainer from './MainContainer';

function App() {

    return (
        <div className="parent-container">
            <CopyrightText />
            <Navbar />
            <div className="Main-container">
                <MainContainer />
            </div>
        </div>
    )

}

export default App;
