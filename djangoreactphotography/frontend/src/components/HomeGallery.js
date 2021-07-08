import React, { useEffect, useState } from 'react';
import HomeGalleryImage from './HomeGalleryImage';
import loadingGIF from '../images/loading.gif';

function HomeGallery() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.meganmccartyphotography.com/api/categories/')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    const categoriesToDisplay = categories.map(c => {
        return (
            <HomeGalleryImage key={c.id} category={c.category_name} url={c.slug} image={c.category_image} alt={c.category_image_alt} />
        )
    })

    if (categories[0] === undefined) {
        return <div className="gif-container"><img id="loading-gif" src={loadingGIF} alt="loading GIF"></img></div>
    }

    return (
        <div className="gallery">
            {categoriesToDisplay}
        </div>
    )
}

export default HomeGallery;