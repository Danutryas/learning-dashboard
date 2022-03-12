import React, { useState, useEffect } from "react";
import "../styles/pages/css/MusicPlayerComponent.css";
import Player from "./MusicPlayer/Player";
// import Playlist from "./MusicPlayer/Playlist";
import MusicSearch from "./MusicPlayer/MusicSearch";
import SearchResult from "./MusicPlayer/SearchResult";

const MusicPlayer = () => {
  const [songs, setSongs] = useState([
    {
      title: "Mood",
      artist: "Adam Christopher",
      category: "Study",
      img_src: "./assets/image/pic1.png",
      src: "./assets/Music/Adam Christopher - Mood - Acoustic.mp3",
    },
    {
      title: "What if I Told You That I Love You",
      artist: "Ali Gate",
      category: "Study",
      img_src: "./assets/image/pic1.png",
      src: "./assets/Music/Ali Gatie - What If I Told You That I Love You.mp3",
    },
    {
      title: "Coffee",
      artist: "beabadoobee",
      category: "Study",
      img_src: "./assets/image/pic1.png",
      src: "./assets/Music/beabadoobee - Coffee.mp3",
    },
    {
      title: "The Nights",
      artist: "Chlara",
      category: "Study",
      img_src: "./assets/image/pic1.png",
      src: "./assets/Music/Chlara - The Nights.mp3",
    },
    {
      title: "When You Love Someone",
      artist: "Endah N Rhesa",
      category: "Study",
      img_src: "./assets/image/pic1.png",
      src: "./assets/Music/Endah N Rhesa - When You Love Someone.mp3",
    },
    {
      title: "Casualties",
      artist: "Ethan Dufault",
      img_src: "./assets/image/pic1.png",
      src: "./assets/Music/Ethan Dufault - Casualties.mp3",
    },
    {
      title: "Blue Jeans",
      artist: "GANGGA",
      category: "Study",
      img_src: "./assets/image/pic1.png",
      src: "./assets/Music/GANGGA - Blue Jeans.mp3",
    },
    {
      title: "Just the Two of Us",
      artist: "Grover Washington, Jr., Bill Withers",
      category: "Pop",
      img_src: "./assets/image/pic1.png",
      src: "./assets/Music/Grover Washington, Jr., Bill Withers - Just the Two of Us (feat. Bill Withers).mp3",
    },
    {
      title: "by my side",
      artist: "HONNE",
      category: "Pop",
      img_src: "./assets/image/pic1.png",
      src: "./assets/Music/HONNE - by my side.mp3",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  const [userInput, setUserInput] = useState("");


  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs]);

  return (
    <div className="music">
      <MusicSearch songs={songs}userInput={userInput} setUserInput={setUserInput} />
      <SearchResult songs={songs} userInput={userInput} />
      {/* <Playlist songs={songs}/> */}
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        songs={songs}
        nextSongsIndex={nextSongIndex}
      />
    </div>
  );
};

export default MusicPlayer;
