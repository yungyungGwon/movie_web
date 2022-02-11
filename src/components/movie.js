import PropType from "prop-types";
import { Link } from "react-router-dom"; /* link는 페이지 새로고침없이 전환되는 함수?이다.*/
import "../styles/Movie.css";

function Movie({
  medium_cover_image,
  title,
  summary,
  genres,
  id,
  year,
  detailPoster,
  backgroundImage,
}) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
      }}
    >
      <div className="movie_sliding_component">
        <div className="movie_box">
          <img
            style={{ width: 220, height: 330 }}
            src={medium_cover_image}
            alt={title}
          />
          <h2 className="movie_title">{title}</h2>
        </div>
      </div>
    </Link>
  );
  /*
  <div>
      <img style={{width:100, height:100}}src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((g) => {
          <li key={g}>{g}</li>;
        })}
      </ul>
    </div>
  */
}

Movie.prototype = {
  medium_cover_image: PropType.string.isRequired,
  title: PropType.string.isRequired,
  summary: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,
  id: PropType.number.isRequired,
};

export default Movie;
