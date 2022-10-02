import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Detail_info from "../components/detailed_information";


function Detail() {
    
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const getDetail = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        console.log(json)
        setDetail(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getDetail();
    }, []);
    return <div>
    {loading ? <h1>Loading...</h1> : 
        
            <Detail_info
            year = {detail.year}
            runtime = {detail.runtime}
            rating = {detail.rating}
            download_count = {detail.download_count}
            like_count = {detail.like_count}
            genres = {detail.genres}
            description_full = {detail.description_full}
            large_cover_image = {detail.large_cover_image}
            title = {detail.title}

            />       
        }
  </div>
}

export default Detail;