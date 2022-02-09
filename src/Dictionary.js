import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Signature from "./Signature";
import "./Dictionary.css";

export default function Dictionary(props) {
  console.log(props);
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [ready, setReady] = useState(false);

  function handelResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handelResponse);
  }

  function handelSubmit(event) {
    event.preventDefault();
    search();
  }

  function handelChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setReady(true);
    search();
  }

  if (ready) {
    return (
      <div className="Dictionary">
        <h1> Dictionary</h1>
        <section>
          <div className="question"> What word do you want to look up?</div>
          <form onSubmit={handelSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handelChange}
              defaultValue={props.defaultKeyword}
            />
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
  } else {
    load();
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
        ;
      </div>
    );
  }
}
