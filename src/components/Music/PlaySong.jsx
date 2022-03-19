import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function PlaySong({ songs, song, setCurrentSongIndex, setIsPlaying }) {
  const playButton = () => {
    let index = songs.findIndex((item) => item.id === song.id);
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };
  return (
    <div className="m-button">
      <button onClick={playButton}>
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </div>
  );
}

export default PlaySong;
