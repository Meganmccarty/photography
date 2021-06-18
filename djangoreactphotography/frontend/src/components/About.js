import React from 'react';
import Megan from '../images/megan.jpg'


class About extends React.Component {
    render () {
        return (
            <div className="About">
                <img src={Megan} alt="Headshot of the photographer, Megan" className="image-shadow"></img>
                <h1>About the Photographer</h1>
                <p>
                    Megan started her photography journey at the age of 8, focusing her camera on
                    butterflies. Her first camera was an Olympus Camedia D-380 point-and-shoot,
                    and it got her hooked on capturing any and every insect she saw. She now
                    shoots photos with a Canon EOS 700D (Rebel T5i) with various lens kits.
                    She has greatly expanded from her usual butterfly shots to include plants,
                    animals, landscapes, and even the occasional building.
                </p>
                <p>
                    She sells her photos as digital downloads on <a href="https://www.alamy.com/portfolio/113387.html">Alamy</a> and
                    as prints on <a href="https://shop.meganmccartyphotography.com">Fine Art America</a>.
                </p>
                <p>
                    Currently, Megan is a freelance web developer, and she built this site
                    using Django and React. She has a <a href="https://meganmccarty.github.io/portfolio/">separate website</a> (which she also built!)
                    showcasing all of her web projects. In addition, you can view her code on Github,
                    including <a href="https://github.com/Meganmccarty/photography">the code that went into this website</a>!
                </p>
            </div>
        );
    };
}

export default About;