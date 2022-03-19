import React, { useEffect } from "react";
import "../styles/pages/css/MusicPlayerComponent.css";
import Player from "./MusicPlayer/Player";


const MusicPlayer = ({
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  nextSongIndex,
  setNextSongIndex,
  audioEl,
  isPlaying,
  setIsPlaying,
}) => {

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs, setNextSongIndex]);

  return (
    <div className="music">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        songs={songs}
        nextSongsIndex={nextSongIndex}
        audioEl={audioEl}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default MusicPlayer;
