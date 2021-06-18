import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuLinks() {
    return (
        <ul>
            <NavLink to="/about"><li>About</li></NavLink>
            <a href="https://www.alamy.com/portfolio/113387.html"><li>Digital Downloads</li></a>
            <a href="https://shop.meganmccartyphotography.com"><li>Prints</li></a>
        </ul>
    )
}
export default MenuLinks;