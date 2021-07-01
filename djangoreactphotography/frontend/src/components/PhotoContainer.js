import React, { useEffect, useState } from 'react';
import { LightgalleryProvider } from "react-lightgallery";
import { useParams } from 'react-router-dom';
import PhotoCard from './PhotoCard';
import loadingGIF from '../images/loading.gif';

function PhotoContainer() {
    const [photos, setPhotos] = useState([]);
    const category = useParams().category;
    console.log();

    useEffect(() => {
        fetch(`http://localhost:8000/api/photos/?category=${category}`)
            .then(response => response.json())
            .then(data => setPhotos(data))
    }, [category])

    console.log(photos)

    const photosToDisplay = photos.map(photo => {
        return <PhotoCard
            key={photo.id}
            s3ImageURL={photo.s3_image_url}
            name={photo.name}
            caption={photo.caption}
            altText={photo.alt_text}
            dateTaken={photo.date_taken}
            category={photo.category}
            location={photo.location}
            alamyURL={photo.alamy_url}
            fineArtAmericaURL={photo.fine_art_america_url}
        />
    })

    if (photos[0] === undefined) {
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
            <div className="gallery">
                {photosToDisplay}
            </div>
        </LightgalleryProvider>
    )
}

export default PhotoContainer;