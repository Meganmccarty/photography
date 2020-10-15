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


function Gallery() {
    return (
        <div className="Gallery">
            <div className="categories">
                <img src={ButterflyImage}></img>
                <a href="#"><h2>Butterflies</h2></a>
            </div>
            <div className="categories">
                <img src={ArthropodImage}></img>
                <h2>Arthropods</h2>
            </div>
            <div className="categories">
                <img src={AnimalImage}></img>
                <h2>Animals</h2>
            </div>
            <div className="categories">
                <img src={PetImage}></img>
                <h2>Pets</h2>
            </div>
            <div className="categories">
                <img src={FlowerImage}></img>
                <h2>Plants and Flowers</h2>
            </div>
            <div className="categories">
                <img src={NatureImage}></img>
                <h2>Landscapes and Nature</h2>
            </div>
            <div className="categories">
                <img src={SunsetImage}></img>
                <h2>Sunsets</h2>
            </div>
            <div className="categories">
                <img src={WeatherImage}></img>
                <h2>Weather</h2>
            </div>
            <div className="categories">
                <img src={SpringImage}></img>
                <h2>Spring</h2>
            </div>
            <div className="categories">
                <img src={AutumnImage}></img>
                <h2>Autumn</h2>
            </div>
            <div className="categories">
                <img src={WinterImage}></img>
                <h2>Winter</h2>
            </div>
            <div className="categories">
                <img src={BuildingImage}></img>
                <h2>Buildings and Architecture</h2>
            </div>
            <div className="categories">
                <img src={OtherImage}></img>
                <h2>Other</h2>
            </div>
        </div>
    )
}

export default Gallery;