import PropType from "prop-types";
import {Link} from "react-router-dom";/* link는 페이지 새로고침없이 전환되는 함수?이다.*/

function Movie({medium_cover_image, title,summary,genres, id}){
    return (
        <div>
        <img src={medium_cover_image} alt={title} />
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary.length>235 ? `${summary.slice(0,235)}...` : summary}</p>
        <ul>
            {genres.map((g) =>{
                <li key={g}>{g}</li>
            })}
        </ul>
    </div>
    );
}

Movie.prototype = {
    medium_cover_image: PropType.string.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired,
    id: PropType.number.isRequired,
}

export default Movie;