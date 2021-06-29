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

import HomeGalleryImage from './HomeGalleryImage';


function HomeGallery() {
    return (
        <div class="Home-Gallery">
            <HomeGalleryImage category="butterflies" url="butterflies" image={ButterflyImage} alt="Butterfly" />
            <HomeGalleryImage category="caterpillars" url="caterpillars" image={CaterpillarImage} alt="Caterpillar" />
            <HomeGalleryImage category="arthropods" url="arthropods" image={ArthropodImage} alt="Arthropod" />
            <HomeGalleryImage category="animals" url="animals" image={AnimalImage} alt="Animal" />
            <HomeGalleryImage category="pets" url="pets" image={PetImage} alt="Pet" />
            <HomeGalleryImage category="plants and flowers" url="plants-and-flowers" image={FlowerImage} alt="Flower" />
            <HomeGalleryImage category="landscapes" url="landscapes" image={LandscapeImage} alt="Landscape" />
            <HomeGalleryImage category="sunsets and skies" url="sunsets-and-skies" image={SunsetImage} alt="Sunset" />
            <HomeGalleryImage category="weather" url="weather" image={WeatherImage} alt="Lightning strike" />
            <HomeGalleryImage category="spring" url="spring" image={SpringImage} alt="Spring flowers" />
            <HomeGalleryImage category="autumn" url="autumn" image={AutumnImage} alt="Autumn foliage" />
            <HomeGalleryImage category="winter" url="winter" image={WinterImage} alt="Frozen berries" />
            <HomeGalleryImage category="water" url="water" image={WaterImage} alt="Water droplets" />
            <HomeGalleryImage category="architecture" url="architecture" image={ArchitectureImage} alt="Building" />
        </div>
    )
}

export default HomeGallery;