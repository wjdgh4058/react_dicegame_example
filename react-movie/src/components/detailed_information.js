import propTypes from "prop-types";
import {Link} from "react-router-dom"

function Detail_info({year, runtime, rating, download_count, like_count, genres, description_full, large_cover_image, title}) {
    return (
        <div>
        <img src= {large_cover_image} />

        </div>
    )
}

Detail_info.propTypes = {
    
};

export default Detail_info;