import React from "react";

function SearchResult({ songs, userInput }) {
  // const SearchResult = songs.map((song) => (
  //     song.filer(() = song.category )
  // ))

  return (
    <div className="search-result">
      {songs
        .filter((val) => {
          if (userInput === "") {
            return "";
          }
          else if (val.title.toLowerCase().includes(userInput.toLowerCase())) {
            return val;
          } 
          else {
            return "";
          }
        })
        .map((val) => (
          <p key={Math.random()}>{val.title}</p>
        ))}
      <ul className="music-result"></ul>
      <ul className="artist-result"></ul>
    </div>
  );
}

export default SearchResult;
