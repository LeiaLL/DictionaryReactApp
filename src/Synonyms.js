import React from "react";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
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
