import React from 'react';
import ButterflyImage from '../images/IMG_2370_watermarked.jpg'
import ArthropodImage from '../images/IMG_8136_watermarked.jpg'
import AnimalImage from '../images/IMG_7370_watermarked.jpg'
import PetImage from '../images/IMG_4163_watermarked.jpg'
import FlowerImage from '../images/IMG_2602_watermarked.jpg'
import NatureImage from '../images/IMG_5391_watermarked.jpg'
import SunsetImage from '../images/IMG_2976_watermarked.jpg'
import WeatherImage from '../images/IMG_4279_watermarked.jpg'
import SpringImage from '../images/IMG_9440_watermarked.jpg'
import AutumnImage from '../images/IMG_5406_watermarked.jpg'
import WinterImage from '../images/IMG_4436_watermarked.jpg'
import BuildingImage from '../images/IMG_4521_watermarked.jpg'
import OtherImage from '../images/IMG_5418_watermarked.jpg'

class ImageCard extends React.Component {
    render() {
        return (
            <div className="Gallery">
                <Image category="Butterflies" image={ButterflyImage}/>
                <Image category="Arthropods" image={ArthropodImage}/>
                <Image category="Animals" image={AnimalImage}/>
                <Image category="Pets" image={PetImage}/>
                <Image category="Plants and flowers" image={FlowerImage}/>
                <Image category="Landscapes and Nature" image={NatureImage}/>
                <Image category="Sunsets" image={SunsetImage}/>
                <Image category="Weather" image={WeatherImage}/>
                <Image category="Spring" image={SpringImage}/>
                <Image category="Autumn" image={AutumnImage}/>
                <Image category="Winter" image={WinterImage}/>
                <Image category="Buildings and Architecture" image={BuildingImage}/>
                <Image category="Other" image={OtherImage}/>
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
                <div className="image-shadow">
                    <div className={this.state.isNotZoomed ? 'zoom-container not-zoomed' : 'zoom-container zoomed'}>
                        <img src={this.props.image}></img>
                    </div>
                </div>
                <a href="#"><h2 onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="button">{this.props.category}</h2></a>
            </div>
        );
    }
}

export default ImageCard