import React from "react";
import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";

export default function List(){

    const [results, setResults] = React.useState([]); 

    const getAllRecipes = () => {
        fetch('/api/recipes/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(data => setResults(data))
    }

    console.log(results)
    React.useEffect(() => {
        getAllRecipes()
    }, [])
    
    return (
        <>
        <Header />
        <ul className="recipe-container">

        </ul>
        </>
    )
}