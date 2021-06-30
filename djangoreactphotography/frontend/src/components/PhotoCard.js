import React from 'react';
import { LightgalleryItem } from "react-lightgallery";
import ShopButtons from './ShopButtons';

function PhotoCard({
    s3ImageURL,
    caption,
    altText,
    dateTaken,
    location,
    alamyURL,
    fineArtAmericaURL,
}) {
    return (
        <div className="thumbnails">
            <LightgalleryItem group="any" src={s3ImageURL} subHtml={
                "<h5>" + caption + "</h5>" +
                "<p>Photo taken on " + dateTaken + ", " +
                location + "</p>"
            }>
                <img src={s3ImageURL} alt={altText} className="image-shadow stopSteal"></img>
            </LightgalleryItem>
            <div className="shop-button-container">
                <ShopButtons alamy={alamyURL} faa={fineArtAmericaURL} />
            </div>
        </div>
    )
}

export default PhotoCard;