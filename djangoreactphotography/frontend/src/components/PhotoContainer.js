import React, { useEffect, useState } from 'react';
import { LightgalleryProvider } from "react-lightgallery";
import { useParams } from 'react-router-dom';
import PhotoCard from './PhotoCard';
import PhotoFilter from './PhotoFilter';
import loadingGIF from '../images/loading.gif';

function PhotoContainer() {
    const [photos, setPhotos] = useState([]);
    const [filter, setFilter] = useState("All");
    const category = useParams().category;
    const newCategory = category.split("-").map(word => {
        if (word !== "and") {
            return word[0].toUpperCase() + word.slice(1);
        } else {
            return word;
        }
    }).join(" ");
    
    useEffect(() => {
        fetch(`http://localhost:8000/api/photos/?category=${category}`)
            .then(response => response.json())
            .then(data => setPhotos(data))
    }, [category])

    function handleFilter(value) {
        setFilter(value);
    }

    const photosToDisplay = photos.filter(
        photo => filter !== "All" ? photo.subcategory === filter.toLowerCase() : photo
    )
        .map(photo => {
            return <PhotoCard
                key={photo.id}
                s3ImageURL={photo.s3_image_url}
                name={photo.name}
                caption={photo.caption}
                altText={photo.alt_text}
                dateTaken={photo.date_taken}
                category={photo.category}
                subcategory={photo.subcategory}
                location={photo.location}
                alamyURL={photo.alamy_url}
                fineArtAmericaURL={photo.fine_art_america_url}
            />
        })

    if (photos.length === 0) {
        return <div className="gif-container"><img id="loading-gif" src={loadingGIF} alt="loading GIF"></img></div>
    }

    return (
        <LightgalleryProvider
            lightgallerySettings={
                {
                    addClass: 'stopSteal',
                    download: false,
                }
            }
            plugins={
                [
                    'lg-autoplay.js',
                    'lg-fullscreen.js',
                    'lg-hash.js',
                    'lg-pager.js',
                    'lg-zoom.js',
                ]
            }
        >
            <div className="gallery-container">
                <h1>{newCategory}</h1>
                <PhotoFilter filter={filter} onFilter={handleFilter} photos={photos}/>
                <div className="gallery">
                    {photosToDisplay}
                </div>
            </div>

        </LightgalleryProvider>
    )
}

export default PhotoContainer;