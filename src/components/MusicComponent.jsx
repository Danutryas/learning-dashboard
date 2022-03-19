import React from "react";
import Music from "./Music/Music";
import "../styles/pages/css/MusicComponent.css";

function MusicComponent({
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  setIsPlaying,
}) {
  return (
    <div className="music-page">
      <Music
        songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default MusicComponent;
