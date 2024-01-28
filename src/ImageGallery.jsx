import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from './Image';
import './ImageGallery.css';

function ImageGallery(){

  const [imageList,setImageList] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  async function downloadImage(){
    const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20");
    const imageResult = response.data.photos;
    console.log("first response",imageResult);
    const imagePromise = imageResult.map((photo)=> {
      return({
        title: photo.title,
        url: photo.url,
        id: photo.id
      })
    })
    console.log(imageResult);
    setImageList(imagePromise)
    setIsLoading(false);
  }
  useEffect(()=>{
    downloadImage()
  },[])

  return(
      <div className="image-wrapper">
        <div className="image-list-wrapper">
          {(isLoading) ? 'Loading..':
            imageList.map((i)=> <Image title={i.title} key={i.id} url={i.url} id={i.id} />)
          }
        </div>

      </div>
  )

}
export default ImageGallery;

