import React from "react";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="Phonetics">
      <button> Listen</button>
      <div> {props.phonetics.text}</div>
    </div>
  );
}
