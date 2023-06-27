import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <p>{recipe.name}</p>
      <img alt={recipe.name} src={recipe.fullImage} />
    </div>
  );
}
