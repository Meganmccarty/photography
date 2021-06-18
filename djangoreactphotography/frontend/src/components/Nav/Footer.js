import React from 'react';

import alamy from '../../images/alamy-logo-2.png';
import ffa from '../../images/fine-art-america-logo-3.png';
import instagram from '../../images/instagram-logo.png';

function Footer() {
    return (
        <footer>
        <div class="icon-container">
            <a href="https://www.alamy.com/portfolio/113387.html"><img src={alamy} alt="Alamy logo"></img></a>
            <a href="https://shop.meganmccartyphotography.com"><img src={ffa} alt="Fine Art America logo"></img></a>
            <a href="https://www.instagram.com/meganemccarty/"><img src={instagram} alt="Instagram logo"></img></a>
        </div>
        <p>Website and content © 2021 Megan McCarty</p>
    </footer>
    )
}

export default Footer;