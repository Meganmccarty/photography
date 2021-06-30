import React, { useEffect, useState } from 'react';
import HomeGalleryImage from './HomeGalleryImage';

function HomeGallery() {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/categories/')
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    }, [])

    const categoriesToDisplay = categories.map(c => {
        return (
            <HomeGalleryImage key={c.id} category={c.category_name} url={c.slug} image={c.category_image} alt={c.category_image_alt} />
        )
    })

    return (
        <div className="Home-Gallery">
            {categoriesToDisplay}
        </div>
    )
}

export default HomeGallery;