import React, {useState,useEffect} from 'react';
import axios from 'axios';

const ButterflyCard = (props) => {
    function renderAlamyButton() {
        if (props.alamyURL === null) {
            return null
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
    
    return (
        <div>
            <div className="image-shadow">
                <img src={props.image}></img>
            </div>
            <div className="caption">
                <p>{props.caption}</p>
                {renderAlamyButton()}
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
            <div className="categories">
                {ButterflyPhotoInfo.map(photo => {

                    if(!photo){
                        return <div>Loading..</div>

                    } else if(photo.category == 'Butterflies') {

                        return (
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
                        )    
                    }
                })}
            </div>   
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

export default ButterflyPhotos