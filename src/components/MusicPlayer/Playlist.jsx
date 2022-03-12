import React from "react";
import PlaylistFilter from './PlaylistFilter'

function Playlist({ songs }) {
  const studyPlaylist = songs.filter((song) => song.category === "Study");
  const popPlaylist = songs.filter((song) => song.category === "Pop");
  const playlists = [studyPlaylist, popPlaylist];

  return (
    <div>
      <PlaylistFilter playlists={playlists} />
    </div>
  );
}

export default Playlist;
