import PropType from "prop-types";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Detail(props) {
  const location = useLocation();
  console.log(location);
  console.log(props);

  return (
    <div className="container">
      <h2>Detail</h2>
      <h2></h2>
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
