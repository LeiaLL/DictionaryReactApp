import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span>
        <ReactAudioPlayer
          src={props.phonetics.audio}
          controls
          volume={0.5}
          className="audio"
        />
      </span>
      <span className="text"> / {props.phonetics.text} /</span>
    </div>
  );
}
