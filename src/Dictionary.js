import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Signature from "./Signature";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [ready, setReady] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handelResponse(response) {
    setResults(response.data[0]);
  }

  function handelPexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handelResponse);

    let apiKey = "563492ad6f917000010000012a9418e2c6c34311a50eb5a6f337a0a2";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handelPexelsResponse);
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
        <Photos photos={photos} />
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
            Suggested keywords: sunset, ocean, yoga, wine
          </div>
        </section>
        ;
      </div>
    );
  }
}
