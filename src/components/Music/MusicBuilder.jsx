import React from 'react'
import PlayerDetails from '../MusicPlayer/PlayerDetails'
import PlaySong from './PlaySong'

function MusicBuilder({ songs, song, setCurrentSongIndex, setIsPlaying }) {
  return (
    <div className="song">
      <PlayerDetails song={song} />
      <PlaySong
        songs={songs}
        song={song}
        setIsPlaying={setIsPlaying}
        setCurrentSongIndex={setCurrentSongIndex}
      />
    </div>
  );
}

export default MusicBuilder