import React, { useState } from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";
import "../../styles/pages/css/MusicPlayerComponent.css";
import AudioBar from "./AudioBar";
import VolumeControl from "./VolumeControl";

function Player({
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  audioEl,
  isPlaying,
  setIsPlaying,
}) {
  const [volumeMutedStatus, setVolumeMutedStatus] = useState(false);
  const [volume, setVolume] = useState(50);
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
  };

  return (
    <div className="c-player">
      <PlayerDetails song={songs[currentSongIndex]} />
      <div className="player-contols">
        <AudioBar
          songs={songs}
          currentSongIndex={currentSongIndex}
          audioEl={audioEl}
          isPlaying={isPlaying}
          setCurrentSongIndex={setCurrentSongIndex}
          skipSong={skipSong}
        />
        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          skipSong={skipSong}
        />
      </div>
      <VolumeControl
        audioEl={audioEl}
        volume={volume}
        setVolume={setVolume}
        volumeMutedStatus={volumeMutedStatus}
        setVolumeMutedStatus={setVolumeMutedStatus}
      />
    </div>
  );
}

export default Player;
