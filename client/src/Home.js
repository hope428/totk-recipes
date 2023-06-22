import React from "react";
import Header from "./components/Header";

export default function Home() {
  const [results, setResults] = React.useState([]);

  const handleSearch = () => {
    const ingredient = document.getElementById("query").value;

    fetch(`/api/recipes/${ingredient}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setResults(data));
  };

  return (
    <div className="container">
      <Header />

      <div>
        {results.length > 0 ? (
          results.map((res) => <img src={res.fullImage}/>)
        ) : (
          <div className="search-field">
            <input id="query" type="text" placeholder="Search an ingredient" />
            <button onClick={handleSearch}>Search</button>
          </div>
        )}
      </div>
    </div>
  );
}
