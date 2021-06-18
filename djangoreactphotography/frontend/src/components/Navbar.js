import React, { useState } from 'react';
import logo from '../images/logo-white.png';
import { NavLink } from 'react-router-dom';
import alamy from '../images/alamy-logo-2.png';
import ffa from '../images/fine-art-america-logo-3.png';
import instagram from '../images/instagram-logo.png';

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
                        <ul>
                            <NavLink to="/about"><li>About</li></NavLink>
                            <a href="https://www.alamy.com/portfolio/113387.html"><li>Digital Downloads</li></a>
                            <a href="https://shop.meganmccartyphotography.com"><li>Prints</li></a>
                        </ul>
                    </nav>
                </div>
            </span>
            <nav id="nav-lg">
                <ul>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <a href="https://www.alamy.com/portfolio/113387.html"><li>Digital Downloads</li></a>
                    <a href="https://shop.meganmccartyphotography.com"><li>Prints</li></a>
                </ul>
            </nav>
            <footer>
                <div class="icon-container">
                    <a href="https://www.alamy.com/portfolio/113387.html"><img src={alamy} alt="Alamy logo"></img></a>
                    <a href="https://shop.meganmccartyphotography.com"><img src={ffa} alt="Fine Art America logo"></img></a>
                    <a href="https://www.instagram.com/meganemccarty/"><img src={instagram} alt="Instagram logo"></img></a>
                </div>
                <p>Website and content © 2021 Megan McCarty</p>
            </footer>
        </div>
    )
}

export default Navbar;