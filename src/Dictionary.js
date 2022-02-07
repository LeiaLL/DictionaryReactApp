import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(" ");

  function handelSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
    </div>
  );
}
