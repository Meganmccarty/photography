import React from 'react';
import ButterflyImage from '../images/IMG_2370_watermarked.jpg'

class ImageCard extends React.Component {
    render() {
        return (
            <div className="Gallery">
                <Image 
                name="Eastern Tiger Swallowtail (Papilio glaucus) on joe-pye weed"
                caption="A dark-form female Eastern Tiger Swallowtail (Papilio glaucus) nectaring on pink joe-pye weed flowers"
                altText="A dark-form female Eastern Tiger Swallowtail (Papilio glaucus) nectaring on pink joe-pye weed flowers"
                dateTaken="August 1, 2016"
                location="Patriot, Indiana"
                image={ButterflyImage}
                />
            </div>
        );
    }
}

function Image(props) {
    return (
        <div className="categories">
            <div className="image-shadow">
                <img src={props.image}></img>
            </div>
            <h2 className="button">{props.caption}</h2>
        </div>
    )
}

export default ImageCard