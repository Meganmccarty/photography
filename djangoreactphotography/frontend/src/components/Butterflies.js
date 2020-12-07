import React, {useState,useEffect} from 'react';
import {
    LightgalleryProvider,
    LightgalleryItem,
} from "react-lightgallery";
import axios from 'axios';
import { render } from 'react-dom';

const ButterflyCard = (props) => {
    function renderShopButtons () {
        if (!props.alamyURL && !props.fineArtAmericaURL) {
            return (
                <div className="button-container">            
                    <button className="disabled">
                        <i className="dont icon"></i>
                        Alamy
                    </button>
                    <button className="disabled">
                        <i class="dont icon"></i>
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
                    <a href={props.fineArtAmericaURL} target="_blank">
                        <button className="enabled">
                            <i class="shopping cart icon"></i>
                            Fine Art America
                        </button>
                    </a>
                </div>
            )
        } else if (props.alamyURL && !props.fineArtAmericaURL) {
            return (
                <div className="button-container">
                    <a href={props.alamyURL} target="_blank">
                        <button className="enabled">
                            <i class="shopping cart icon"></i>
                            Alamy
                            </button>
                        </a>
                    <button className="disabled">
                        <i class="dont icon"></i>
                        Fine Art America
                    </button>
                </div>
            )
        } else if (props.alamyURL && props.fineArtAmericaURL) {
            return (
                <div className="button-container">
                    <a href={props.alamyURL} target="_blank">
                        <button className="enabled">
                            <i class="shopping cart icon"></i>
                            Alamy
                        </button>
                    </a>
                    <a href={props.fineArtAmericaURL} target="_blank">
                        <button className="enabled">
                            <i class="shopping cart icon"></i>
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

const ButterflyPhotos = () => {
    const [ButterflyPhotoInfo,setButterflyPhotoInfo] = useState([]);

    const fetchButterflyPhotos  = async () =>{
        const response = await axios.get('/api/photos/')
        setButterflyPhotoInfo(response.data)
    }

    const createButterflyCards = () => {
        return (
            <>
                {ButterflyPhotoInfo.map(photo => {

                    if(!photo){
                        return <div>Loading..</div>

                    } else if(photo.category === 'Butterflies') {

                        return (
                            
                                <ButterflyCard
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
        fetchButterflyPhotos()
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
                {createButterflyCards()}
            </div>
        </LightgalleryProvider>
    )
}

export default ButterflyPhotos

/*import React, {useState,useEffect} from 'react';
import axios from 'axios';

const ButterflyCard = (props) => {
    function renderAlamyButton() {
        if (props.alamyURL === null) {
            return (
                <button className="red">
                    Alamy
                </button>
            )
        } else {
            return (
                <a href={props.alamyURL} target="_blank">
                    <button className="green">
                        Alamy
                    </button>
                </a>
            );
        }
    }

    function renderFFAButton() {
        if (props.fineArtAmericaURL === null) {
            return (
                <button className="red">
                    Fine Art America
                </button>
            )
        } else {
            return (
                <a href={props.fineArtAmericaURL} target="_blank">
                    <button className="green">
                        Fine Art America
                    </button>
                </a>
            );
        }
    }
    
    return (
        <div>
            <div className="image-shadow">
                <img src={props.image}></img>
            </div>
            <div className="caption">
                <p>{props.caption}</p>
                {renderAlamyButton()}
                {renderFFAButton()}
            </div>
        </div> 
    )
}

const ButterflyPhotos = () => {
    const [ButterflyPhotoInfo,setButterflyPhotoInfo] = useState([]);

    const fetchButterflyPhotos  = async () =>{
        const response = await axios.get('/api/photos/')
        setButterflyPhotoInfo(response.data)
    }

    const createButterflyCards = () => {
        return (
            <>
                {ButterflyPhotoInfo.map(photo => {

                    if(!photo){
                        return <div>Loading..</div>

                    } else if(photo.category == 'Butterflies') {

                        return (
                            <div className="categories">
                                <ButterflyCard
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
                            </div>
                        )    
                    }
                })}
            </>   
        )
    }

    useEffect(()=>{
        fetchButterflyPhotos()
    },[])

    return (
        <div className="Gallery">
            {createButterflyCards()}
        </div>
    )
}

export default ButterflyPhotos*/