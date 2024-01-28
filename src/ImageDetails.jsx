import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import './ImageDetails.css';

function ImageDetails(){
    const {id} = useParams();
    const [image,setImage] = useState({});
    console.log(id);
    async function downloadImage(){
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        setImage({
            url: response.data.photo.url,
            title: response.data.photo.title,
            description: response.data.photo.description
        })
        console.log(response.data)
    }

    useEffect(()=>{
        downloadImage()
    },[])
    return(
        <div className="image-gallery-wrapper">
            <img className="photo" src={image.url} alt="" />
            <div className="image-description" >
                <div className="title">{image.title}</div>
                <br/>
                <div className="description">{image.description}</div>
            </div>
        </div>
    )
}
export default ImageDetails;