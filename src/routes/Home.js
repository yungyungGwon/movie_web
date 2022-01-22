import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        //`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&limit=50`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <section className="container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="movie_list">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              detailPoster={movie.large_cover_image}
              backgroundImage={movie.backgroundImage}
            />
          ))}
        </div>
      )}
    </section>
    
  );
}
export default Home;
