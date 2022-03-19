import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/pages/css/MusicPlayerComponent.css";


function PlayerControls({ skipSong, setIsPlaying, isPlaying }) {
  return (
    <div className="c-player--controls">
      <button className="skip-btn" onClick={() => skipSong(false)}>
        <FontAwesomeIcon icon={faBackward} size="lg" />
      </button>
      <button className="skip-btn" onClick={() => setIsPlaying(!isPlaying)}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="lg" />
      </button>
      <button className="skip-btn" onClick={() => skipSong()}>
        <FontAwesomeIcon icon={faForward} size="lg" />
      </button>
    </div>
    
  );
}

export default PlayerControls;
