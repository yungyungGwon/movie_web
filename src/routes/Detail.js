import PropType from "prop-types";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  const [detail, setDetail] = useState();
  const {id} = useParams();
  

  useEffect(() => {
    (async() =>{
        const getDetail = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(getDetail)
        setDetail(getDetail);
    })();
  }, []);


  return (
    <div className="container">
      <h2>Detail</h2>
      <div>
        

      </div>
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
