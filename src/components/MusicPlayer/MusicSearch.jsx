import React from 'react'

function MusicSearch({ setUserInput }) {
    
    const inputSearchHandling = (e)=> {
        setUserInput(e.target.value)
    } 

    return (
      <div className="music-search">
        <h4>Search Local Music</h4>
        <input
          type="text"
          placeholder="Title, Artist, Playlist"
          onChange={inputSearchHandling}
        />
      </div>
    );
}

export default MusicSearch;