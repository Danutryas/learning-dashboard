import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
  faVolumeHigh,
  faVolumeOff,
  faVolumeLow,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";

function VolumeControl({
  audioEl,
  volume,
  setVolume,
  volumeMutedStatus,
  setVolumeMutedStatus,
}) {
  const volumeHandler = (e) => {
    setVolumeMutedStatus(false);
    audioEl.current.volume = e.target.value / 100;
    setVolume(e.target.value);
  };

  const volumeIcon = () => {
    if (volumeMutedStatus) {
      return (
        <FontAwesomeIcon className="volume-icon" icon={faVolumeXmark} inverse />
      );
    } else if (volume >= 80) {
      return (
        <FontAwesomeIcon className="volume-icon" icon={faVolumeHigh} inverse />
      );
    } else if (volume < 80 && volume >= 50) {
      return (
        <FontAwesomeIcon className="volume-icon" icon={faVolumeHigh} inverse />
      );
    } else if (volume <= 50 && volume > 0) {
      return (
        <FontAwesomeIcon className="volume-icon" icon={faVolumeLow} inverse />
      );
    } else {
      return (
        <FontAwesomeIcon className="volume-icon" icon={faVolumeOff} inverse />
      );
    }
  };
  const muteButtonhandler = () => {
    setVolumeMutedStatus((prev) => !prev);
  };
  useEffect(() => {
    audioEl.current.muted = volumeMutedStatus;
  }, [audioEl, volumeMutedStatus]);
  return (
    <div className="c-volume-contol">
      <button onClick={muteButtonhandler}>{volumeIcon()}</button>
      <input
        type={"range"}
        value={volumeMutedStatus ? 0 : volume}
        onChange={volumeHandler}
      />
    </div>
  );
}

export default VolumeControl;
