import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Signature from "./Signature";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(" ");
  const [results, setResults] = useState(null);

  function handelResponse(response) {
    setResults(response.data[0]);
  }

  function handelSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handelResponse);
  }

  function handelChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1> Dictionary</h1>
      <section>
        <div className="question"> What word do you want to look up?</div>
        <form onSubmit={handelSubmit}>
          <input type="search" autoFocus={true} onChange={handelChange} />
        </form>
        <div className="suggestions">
          {" "}
          Suggested keywords: sunset, yoga, wine, poppy
        </div>
      </section>

      <Results results={results} />
      <Signature />
    </div>
  );
}
