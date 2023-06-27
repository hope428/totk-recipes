import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <p className="recipe-title">{recipe.name}</p>
      <img className="recipe-img" alt={recipe.name} src={recipe.fullImage} />
      <ul>
        {recipe.recipe.map((step) => {
           return <li>{step}</li>
        })}
      </ul>
    </div>
  );
}
