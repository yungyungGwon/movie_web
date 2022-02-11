import PropType from "prop-types";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  const [load, setLoad] = useState(true);
  const [info, setInfo] = useState([]);
  const { id } = useParams();

  const getMovieInfo = async () => {
    const Json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setInfo(Json.data.movie);
    setLoad(false);
  };
  useEffect(() => {
    getMovieInfo();
  }, []);
  console.log(info);

  /*  useEffect(() => {
    (async () => {
      const getDetail = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(getDetail.data);
      setDetail(getDetail.data);
      console.log(detail)
    })();
  }, []);
*/
  return (
    <div className="container">
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{info.title}</h1>
          <img
            style={{ width: 220, height: 330 }}
            src={info.large_cover_image}
          ></img>
          <div>Title : {info.title}</div>
          <div>Genres : {info.genres}</div>
          <div>Like Count : {info.like_count}</div>
          <div>Rating : {info.rating}</div>
          <div>
            {info.description_full === ""
              ? ""
              : "Description : " + info.description_full}
          </div>
        </div>
      )}
    </div>
  );
}

Detail.prototype = {
  medium_cover_image: PropType.string.isRequired,
  title: PropType.string.isRequired,
  summary: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,
  id: PropType.number.isRequired,
};

export default Detail;
