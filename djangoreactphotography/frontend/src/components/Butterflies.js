import React, {useState,useEffect} from 'react';
import axios from 'axios';

const ButterflyCard = (props) => {
    function renderAlamyButton() {
        if (props.alamyURL === null) {
            return (
                <button>
                    Not for sale on Alamy
                </button>
            );
        } else {
            return (
                <a href={props.alamyURL} target="_blank">
                    <button>
                        Alamy
                    </button>
                </a>
            );
        }
    }
    
    return (
        <div className="Gallery"> 
            <div className= "categories">
                <div className="image-shadow">
                    <img src={props.image}></img>
                </div>
                <div className="button">
                    {props.name}
                    <p>{props.caption}</p>
                </div>
            </div>
            <div>
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
        return(
            <div>
                {ButterflyPhotoInfo.map(photo => {

                    if(!photo){
                        return <div>Loading..</div>

                    } else {

                        return (
                            <ButterflyCard
                                image={photo.image}
                                name = {photo.name}
                                caption={photo.caption}
                                altText={photo.alt_text}
                                dateTaken={photo.date_taken}
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
        <>
            <div>
                <h1>Butterflies</h1>
            </div>
            {createButterflyCards()}
        </>
    )
}

export default ButterflyPhotos


/*class ImageCard extends React.Component {
    render() {
        return (
            <div className="Gallery">
                <Image 
                name="Eastern Tiger Swallowtail (Papilio glaucus) on joe-pye weed"
                caption="A dark-form female Eastern Tiger Swallowtail (Papilio glaucus) nectaring on pink joe-pye weed flowers"
                altText="A dark-form female Eastern Tiger Swallowtail (Papilio glaucus) nectaring on pink joe-pye weed flowers"
                dateTaken="August 1, 2016"
                location="Patriot, Indiana"
                image={ButterflyImage}
                />
            </div>
        );
    }
}

function Image(props) {
    return (
        <div className="categories">
            <div className="image-shadow">
                <img src={props.image}></img>
            </div>
            <h2 className="button">{props.caption}</h2>
        </div>
    )
}

export default ImageCard*/