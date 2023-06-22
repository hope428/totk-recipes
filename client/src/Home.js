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
      <input id="query" type="text" placeholder="Search an ingredient" />
      <button onClick={handleSearch}>Search</button>

      <div>{results.map(res => <h1>{res.name}</h1>)}</div>
    </div>
  );
}
