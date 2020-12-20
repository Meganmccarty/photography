import React from 'react';
import ButterflyImage from '../images/IMG_2370_watermarked.jpg'
import CaterpillarImage from '../images/IMG_6388_watermarked.jpg'
import ArthropodImage from '../images/IMG_8136_watermarked.jpg'
import AnimalImage from '../images/IMG_7370_watermarked.jpg'
import PetImage from '../images/IMG_4163_watermarked.jpg'
import FlowerImage from '../images/IMG_2602_watermarked.jpg'
import NatureImage from '../images/IMG_9078_watermarked.jpg'
import LandscapeImage from '../images/IMG_5391_watermarked.jpg'
import SunsetImage from '../images/IMG_2976_watermarked.jpg'
import NightImage from '../images/Test.jpg'
import WeatherImage from '../images/IMG_4279_watermarked.jpg'
import SpringImage from '../images/IMG_9440_watermarked.jpg'
import AutumnImage from '../images/IMG_5406_watermarked.jpg'
import WinterImage from '../images/IMG_4436_watermarked.jpg'
import ArchitectureImage from '../images/IMG_4521_watermarked.jpg'
import OtherImage from '../images/IMG_5418_watermarked.jpg'
import { NavLink } from 'react-router-dom';


class ImageCard extends React.Component {
    render() {
        return (
            <div className="Home-Gallery">
                <Image category="butterflies" url="butterflies" image={ButterflyImage}/>
                <Image category="caterpillars" url="caterpillars" image={CaterpillarImage}/>
                <Image category="arthropods" url="arthropods" image={ArthropodImage}/>
                <Image category="animals" url="animals" image={AnimalImage}/>
                <Image category="pets" url="pets" image={PetImage}/>
                <Image category="plants" url="plants-and-flowers" image={FlowerImage}/>
                <Image category="nature" url="nature" image={NatureImage}/>
                <Image category="landscapes" url="landscapes" image={LandscapeImage}/>
                <Image category="sunsets" url="sunsets" image={SunsetImage}/>
                <Image category="night" url="night-skies" image={NightImage}/>
                <Image category="weather" url="weather" image={WeatherImage}/>
                <Image category="spring" url="spring" image={SpringImage}/>
                <Image category="autumn" url="autumn" image={AutumnImage}/>
                <Image category="winter" url="winter" image={WinterImage}/>
                <Image category="architecture" url="architecture" image={ArchitectureImage}/>
                <Image category="other" url="other" image={OtherImage}/>
            </div>
        );
    }
}

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isNotZoomed: true};
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
        this.setState(state => ({
            isNotZoomed: false
        }));
    }

    onMouseLeave() {
        this.setState(state => ({
            isNotZoomed: true
        }));
    }

    render() {
        return (
            <div className="categories">
                
                    <div className={this.state.isNotZoomed ? 'zoom-container not-zoomed' : 'zoom-container zoomed'}>
                        <img src={this.props.image}></img>
                    </div>
                
                <NavLink to={this.props.url}><h2 onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="gallery-button green">{this.props.category}</h2></NavLink>
            </div>
        );
    }
}

export default ImageCard