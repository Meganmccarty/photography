import React from 'react';
import ButterflyImage from '../images/IMG_2370_watermarked.jpg'
import CaterpillarImage from '../images/IMG_6388_watermarked.jpg'
import ArthropodImage from '../images/IMG_3895_watermarked.jpg'
import AnimalImage from '../images/April 25-May 14 2010 181_watermarked.jpg'
import PetImage from '../images/IMG_1446_watermarked.jpg'
import FlowerImage from '../images/IMG_2602_watermarked.jpg'
import LandscapeImage from '../images/IMG_5391_watermarked.jpg'
import SunsetImage from '../images/IMG_8846_watermarked.jpg'
import WeatherImage from '../images/June 15 2010 057-Edit_watermarked.jpg'
import SpringImage from '../images/IMG_9346_watermarked.jpg'
import AutumnImage from '../images/IMG_3534_watermarked.jpg'
import WinterImage from '../images/IMG_1824_watermarked.jpg'
import ArchitectureImage from '../images/IMG_3946_watermarked.jpg'
import WaterImage from '../images/IMG_2218_watermarked.jpg'
import { NavLink } from 'react-router-dom';


class ImageCard extends React.Component {
    render() {
        return (
            <div className="Home-Gallery">
                <Image category="butterflies" url="butterflies" image={ButterflyImage} alt="Butterfly"/>
                <Image category="caterpillars" url="caterpillars" image={CaterpillarImage} alt="Caterpillar"/>
                <Image category="arthropods" url="arthropods" image={ArthropodImage} alt="Arthropod"/>
                <Image category="animals" url="animals" image={AnimalImage} alt="Animal"/>
                <Image category="pets" url="pets" image={PetImage} alt="Pet"/>
                <Image category="plants and flowers" url="plants-and-flowers" image={FlowerImage} alt="Flower"/>
                <Image category="landscapes" url="landscapes" image={LandscapeImage} alt="Landscape"/>
                <Image category="sunsets and skies" url="sunsets-and-skies" image={SunsetImage} alt="Sunset"/>
                <Image category="weather" url="weather" image={WeatherImage} alt="Lightning strike"/>
                <Image category="spring" url="spring" image={SpringImage} alt="Spring flowers"/>
                <Image category="autumn" url="autumn" image={AutumnImage} alt="Autumn foliage"/>
                <Image category="winter" url="winter" image={WinterImage} alt="Frozen berries"/>
                <Image category="water" url="water" image={WaterImage} alt="Water droplets"/>
                <Image category="architecture" url="architecture" image={ArchitectureImage} alt="Building"/>
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
                        <img className="stopSteal" src={this.props.image} alt={this.props.alt}></img>
                    </div>

                <NavLink to={this.props.url}><h2 onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="gallery-button green">{this.props.category}</h2></NavLink>
            </div>
        );
    }
}

export default ImageCard