import React from "react";
import {Link} from "react-router-dom"

export default function Header (){
    return (
        <header>
            <h1 className="logo">TOTK Recipe Search</h1>
            <ul className="nav-links">
                <li>
                    <Link to="/list">Recipes</Link>
                    <Link to="/">Search</Link>
                    <Link to="/saved">Collection</Link>
                </li>
            </ul>
        </header>
    )
}