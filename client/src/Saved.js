import React from "react";
import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";

export default function Saved(){

    const [favorites, setFavorites] = React.useState([]);

    const ids = ["649a2b2e5f511166d07cae40", "649a2b2e5f511166d07cae41", "649a2b2e5f511166d07cae43"]

    const getFavorites = () => {
        ids.map((id) => {
            fetch(`api/recipes/id/${id}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            })
            .then(res => res.json())
            .then(data => setFavorites((prevFavorites) => (
                [...prevFavorites, data]
                )))
        })
    }
    

    return (
        <>
        <Header />
        <h1>Saved Recipes:</h1>
        {favorites.map(favorite => (
            <h2 key={favorite.id}>{favorite.name}</h2>
        ))}
        </>
    )
}