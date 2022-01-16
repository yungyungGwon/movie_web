import React from "react";
import {useLocation} from "react-router-dom";

function Detail(state) {
  let location = useLocation();
  console.log(location)
  console.log(location.state)
  //console.log("medium_cover_image: ", state.medium_cover_image)
  console.log("title: ",state.title)
  //console.log("summary: ",state.summary)
  //console.log("genres: ",state.genres)
  //console.log("id: ",state.id)
  //console.log("year: ",state.year)
  //console.log("detailPoster: ",state.detailPoster)
  //console.log("backgroundImage: ",state.backgroundImage)
  return (
    <div className="container">
      <h2>Detail</h2>
      <div>
        
      </div>
    </div>
  );
} 
export default Detail;
