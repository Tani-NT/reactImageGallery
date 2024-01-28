import './Image.css';
import {Link} from 'react-router-dom';
function Image({url,id}){
    return(
        <div className="image-container">
            <Link to={`/photos/${id}`}>
                <img className="gallery-image" src={url} alt="" />
            </Link>
        </div>
    )
}
export default Image;