import React from "react";
import "../../styles/pages/css/MusicPlayerComponent.css";

function PlayerDetails({ song }) {
  return (
    <div className="c-player--details">
      <div className="details-img">
        <img src={song.img_src} alt="Im" height="300px" width="300px" />
      </div>
      <div className="details-song">
        <h3 className="details-title">{song.title}</h3>
        <p className="details-artist">{song.artist}</p>
      </div>
    </div>
  );
}

export default PlayerDetails;
