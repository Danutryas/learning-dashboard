import React, { useEffect, useRef, useState } from "react";
import PlayerControls from "../MusicPlayer/PlayerControls";
import "../../styles/pages/css/MusicPlayerComponent.css";
import AudioControls from "./AudioControls";

function DashboardPlayer({ songs, currentSongIndex, setCurrentSongIndex }) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const skipSong = (forward = true) => {
    if (forward) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;
        if (temp > songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = songs.length - 1;
        }
        return temp;
      });
    }
    setIsPlaying(true);
  };
  return (
    <div className="c-player">
      <AudioControls
        songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        audioEl={audioEl}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
        
      />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
    </div>
  );
}

export default DashboardPlayer;
