import React from "react";
import MusicBuilder from "./MusicBuilder";

function Music({ songs, setCurrentSongIndex, setIsPlaying }) {
  return (
    <div className="songs">
      {songs.map((song) => (
        <MusicBuilder
          songs={songs}
          song={song}
          setCurrentSongIndex={setCurrentSongIndex}
          setIsPlaying={setIsPlaying}
          key={song.id}
        />
      ))}
    </div>
  );
}

export default Music;
