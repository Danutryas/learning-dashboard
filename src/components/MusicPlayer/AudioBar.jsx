import React, { useEffect,  useState } from "react";

function AudioBar({
  songs,
  currentSongIndex,
  audioEl,
  isPlaying,
  setCurrentSongIndex,
  skipSong,
}) {
  const [playSecond, setPlaySecond] = useState(0);
  const [maxDuration, setMaxDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");

  //   const currentTime = audioEl.current.currentTime;
  const inputTimeHandler = (e) => {
    audioEl.current.currentTime = e.target.value;
    setPlaySecond(e.target.value);
  };
  const songMaxDuration = () => {
    if (!isNaN(audioEl.current.duration)) {
      setMaxDuration(audioEl.current.duration);
    }
  };
  const nowPlayingTime = () => {
    setPlaySecond(audioEl.current.currentTime);
  };

  const currentTimeHandling = () => {
    let secondInt = audioEl.current.currentTime;
    let min = Math.floor(secondInt / 60);
    let sec = Math.floor(secondInt - min * 60);
    if (min < 10 || sec < 10) {
      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
    }
    let result = min + ":" + sec;
    setCurrentTime(result);
  };
  const interval = () => {
    setInterval(() => {
      songMaxDuration();
      nowPlayingTime();
      currentTimeHandling();
      audioEnd();
    }, 100);
  };

  useEffect(() => {
    maxTime();
    if (isPlaying) {
      interval();
    } else {
      clearInterval();
    }
  });

  const maxTime = () => {
    if (!isNaN(audioEl.current.duration)) {
      let secondInt = Math.floor(audioEl.current.duration);
      let min = Math.floor(secondInt / 60);
      let sec = Math.floor(secondInt - min * 60);
      if (min < 10 || sec < 10) {
        if (min < 10) {
          min = "0" + min;
        }
        if (sec < 10) {
          sec = "0" + sec;
        }
      }
      let result = min + ":" + sec;
      setDuration(result);
    }
  };
  const audioEnd = () => {
    if (audioEl.current.ended === true) {
      skipSong(true)
    }
  };

  return (
    <div className="audio-controls">
      <audio
        src={songs[currentSongIndex].src}
        ref={audioEl}
        preload="metadata"
      />
      <span className="current-time">{currentTime}</span>
      <input
        type="range"
        id="seek-slider"
        max={maxDuration}
        value={playSecond}
        onChange={inputTimeHandler}
      ></input>
      <span className="duration">{duration}</span>
    </div>
  );
}

export default AudioBar;
