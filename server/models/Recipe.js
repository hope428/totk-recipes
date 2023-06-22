const {Schema, model} = require('mongoose')

const recipeSchema = new Schema({
    name: String,
    ingredients: [String],
    recipe: [String],
    fullImage: String
})

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe