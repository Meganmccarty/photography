import React, {useState,useEffect} from 'react';
import {
    LightgalleryProvider,
    LightgalleryItem,
} from "react-lightgallery";
import axios from 'axios';
import { render } from 'react-dom';

const PlantCard = (props) => {
    function renderShopButtons () {
        if (!props.alamyURL && !props.fineArtAmericaURL) {
            return (
                <div className="button-container">            
                    <button className="disabled">
                        <i className="dont icon"></i>
                        Alamy
                    </button>
                    <button className="disabled">
                        <i className="dont icon"></i>
                        Fine Art America
                    </button>
                </div>
            )
        } else if (!props.alamyURL && props.fineArtAmericaURL) {
            return (
                <div className="button-container">            
                    <button className="disabled">
                        <i className="dont icon"></i>
                        Alamy
                    </button>
                    <a href={props.fineArtAmericaURL}>
                        <button className="enabled">
                            <i className="shopping cart icon"></i>
                            Fine Art America
                        </button>
                    </a>
                </div>
            )
        } else if (props.alamyURL && !props.fineArtAmericaURL) {
            return (
                <div className="button-container">
                    <a href={props.alamyURL}>
                        <button className="enabled">
                            <i className="shopping cart icon"></i>
                            Alamy
                            </button>
                        </a>
                    <button className="disabled">
                        <i className="dont icon"></i>
                        Fine Art America
                    </button>
                </div>
            )
        } else if (props.alamyURL && props.fineArtAmericaURL) {
            return (
                <div className="button-container">
                    <a href={props.alamyURL}>
                        <button className="enabled">
                            <i className="shopping cart icon"></i>
                            Alamy
                        </button>
                    </a>
                    <a href={props.fineArtAmericaURL}>
                        <button className="enabled">
                            <i className="shopping cart icon"></i>
                            Fine Art America
                        </button>
                    </a>
                </div>
            )
        }
    }

    return (
        <div className="thumbnails">
            <LightgalleryItem group="any" src={props.image} subHtml={
                "<h5>"+props.caption+"</h5>"+
                "<p>Photo taken on "+props.dateTaken+", "+
                props.location+"</p>"
            }>
                <img src={props.image} alt={props.altText} className="image-shadow"></img>
            </LightgalleryItem>
            <div className="shop-button-container">
                {renderShopButtons()}
            </div>
        </div>
    )
}

const PlantPhotos = () => {
    const [PlantPhotoInfo,setPlantPhotoInfo] = useState([]);

    const fetchPlantPhotos  = async () =>{
        const response = await axios.get('/api/photos/')
        setPlantPhotoInfo(response.data)
    }

    const createPlantCards = () => {
        return (
            <>
                {PlantPhotoInfo.map(photo => {

                    if(!photo){
                        return <div>Loading..</div>

                    } else if(photo.category === 'Plants') {

                        return (
                            
                                <PlantCard
                                    key={photo.id}
                                    image={photo.image}
                                    name={photo.name}
                                    caption={photo.caption}
                                    altText={photo.alt_text}
                                    dateTaken={photo.date_taken}
                                    category={photo.category}
                                    location={photo.location}
                                    alamyURL={photo.alamy_url}
                                    fineArtAmericaURL={photo.fine_art_america_url}
                                />
                            
                        )    
                    }
                })}
            </>   
        )
    }

    useEffect(()=>{
        fetchPlantPhotos()
    },[])

    return (
        <LightgalleryProvider
            lightgallerySettings={
                {
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
            <div className="Gallery">
                {createPlantCards()}
            </div>
        </LightgalleryProvider>
    )
}

export default PlantPhotos
