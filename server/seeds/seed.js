const db = require("../config/connection");
const { Recipe } = require("../models");

const recipeData = require('./recipeData.json')

db.once('open', async () => {
    await Recipe.deleteMany({})

    const recipes = await Recipe.insertMany(recipeData)
    console.log('Recipes seeded! 🥘 🍃')

    process.exit(0)
})