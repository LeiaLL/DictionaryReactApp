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
    <div>
      <h1> Dictionary</h1>
      <form onSubmit={handelSubmit}>
        <input type="search" autoFocus={true} onChange={handelChange} />
        <input type="submit" value="Search" />
      </form>
      <Results results={results} />
      <Signature />
    </div>
  );
}
