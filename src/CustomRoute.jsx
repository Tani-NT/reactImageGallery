import { Routes, Route } from "react-router-dom";
import ImageDetails from "./ImageDetails";
import ImageGallery from "./ImageGallery";
function CustomRoute(){

    return(
        <Routes>
            <Route path="/" element={<ImageGallery/>} />
            <Route path="/photos/:id" element={<ImageDetails/>} />
        </Routes>
    )
}
export default CustomRoute;