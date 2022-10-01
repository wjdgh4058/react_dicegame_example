import propTypes from "prop-types";

function Movie({medium_cover_image, title, summary, genres}) {
    return (
        <div>
        <img src= {medium_cover_image} alt={title}/>
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            {genres.map(g => <li key = {g}>
                {g}
            </li>)}
        </ul>
        </div>
    )
}

Movie.propTypes = {
    medium_cover_image : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;