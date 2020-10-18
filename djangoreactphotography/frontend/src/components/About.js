import React from 'react';
import Megan from '../images/megan.jpg'


class About extends React.Component {
    render () {
        return (
            <div className="About">
                <img src={Megan}></img>
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
                    She also sells her photos as digitial downloads on Alamy and as prints on 
                    Fine Art America.
                </p>
                <p>
                    Currently, Megan is a freelance web developer, and she built this site
                    using Django and React. She has a <a href="https://meganmccarty.github.io/portfolio/">separate website</a> (which she also built!)
                    showcasing all of her web projects. In addition, you can view her code on Github,
                    including the code that went into this website!
                </p>
            </div>
        );
    };
}
 
export default About;