import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <div className="similar"> Similar:</div>
        {props.synonyms.map(function (synonym, index) {
          return (
            <ul key={index}>
              {" "}
              <li> {synonym}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
