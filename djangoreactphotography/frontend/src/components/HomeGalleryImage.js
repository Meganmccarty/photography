import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function HomeGalleryImage({ category, url, image, alt }) {
    const [isZoomed, setIsZoomed] = useState(false);

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

            <NavLink to={url}>
                <h2 onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut} className="gallery-button green">
                    {category}
                </h2>
            </NavLink>
        </div>
    )
}

export default HomeGalleryImage;