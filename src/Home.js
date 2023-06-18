import React from "react";
import Header from "./components/Header";

export default function Home() {
  const [recipes, setRecipes] = React.useState([]);
  const [results, setResults] = React.useState([]);

  const handleSearch = () => {
    const ingredient = document.getElementById("query").value;
    console.log(ingredient);

    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));

    filterResults(recipes, ingredient);
  };

  const filterResults = (foundRecipes, query) => {
    let matches = [];

    for (let i = 0; i < foundRecipes.length; i++) {
      const current = foundRecipes[i];

      if (current.ingredients.includes(query)) {
        matches.push(current);
      }
    }

    setResults(matches);
  };


  return (
    <div className="container">
      <Header />
      <input id="query" type="text" placeholder="Search an ingredient" />
      <button onClick={handleSearch}>Search</button>

      <div>
        {results.map(res => res.name)}
      </div>
    </div>
  );
}
