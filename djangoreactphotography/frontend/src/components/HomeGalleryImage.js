import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeGalleryImage({ category, url, image, alt }) {
    const [isZoomed, setIsZoomed] = useState(false);

    const newCategory = category.split(" ").map(word => {
        if (word !== "and") {
            return word[0].toUpperCase() + word.slice(1);
        } else {
            return word;
        }
    }).join(" ");

    function handleZoomIn() {
        setIsZoomed(true);
    }

    function handleZoomOut() {
        setIsZoomed(false);
    }

    return (
        <div className="categories">

            <div className={isZoomed ? 'zoom-container zoomed' : 'zoom-container not-zoomed'}>
                <img src={image} alt={alt}></img>
            </div>

            <Link to={url}>
                <h2 onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut} className="green">
                    {newCategory}
                </h2>
            </Link>
        </div>
    )
}

export default HomeGalleryImage;