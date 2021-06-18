import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuLinks from './MenuLinks';
import Footer from './Footer';

import logo from '../../images/logo-white.png';

function Navbar() {
    const [menuShown, setMenuShown] = useState(false);

    function handleClick() {
        menuShown ? setMenuShown(false) : setMenuShown(true);
    }

    return (
        <div className="Navbar">
            <div id="logo">
                <NavLink to="/"><img src={logo} alt="Camera logo with a butterfly on the top left of the camera"></img></NavLink>
            </div>
            <NavLink to="/"><h1>Megan McCarty Photography</h1></NavLink>
            <span onClick={handleClick} id="menu-btn">
                &#9776; Menu
                <div id="nav" className={menuShown ? 'open' : 'closed'}>
                    <nav>
                        <MenuLinks />
                    </nav>
                </div>
            </span>
            <nav id="nav-lg">
                <MenuLinks />
            </nav>
            <Footer />
        </div>
    )
}

export default Navbar;