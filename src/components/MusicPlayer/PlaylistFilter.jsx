import React from "react";

function PlaylistFilter({ playlists }) {
  return (
    <div className="Playlist">
      {playlists.map((playlist) =>
        <div className="p"></div>

        )}
    </div>
  );
}

export default PlaylistFilter;
