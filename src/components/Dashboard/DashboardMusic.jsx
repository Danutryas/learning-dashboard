import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DashboardPlayer from "./DashboardPlayer";

function DashboardMusic() {
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
  
  return (
    <div className="music-dashboard">
      <div className="m-d-header">
        <h3 className="card-title">Now Playing</h3>
        <Link to="/music">
          <button className="forward-button" title="Go to reminder page">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} inverse />
          </button>
        </Link>
      </div>
      <div className="m-d-component">
        <div className="m-details">
          <h4 className="m-title">{songs[currentSongIndex].title}</h4>
          <p className="m-artist">{songs[currentSongIndex].artist}</p>
        </div>
        <DashboardPlayer
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          songs={songs}
        />
      </div>
    </div>
  );
}

export default DashboardMusic;
