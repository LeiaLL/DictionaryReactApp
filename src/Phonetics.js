import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  function playSound() {}
  return (
    <div className="Phonetics">
      <span>
        {" "}
        <button onClick={playSound}>Listen </button>
      </span>
      <span className="text"> / {props.phonetics.text} /</span>
    </div>
  );
}
