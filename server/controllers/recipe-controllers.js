const { Recipe } = require("../models");

module.exports = {
  async getAllRecipes(req, res) {
    try {
      const allRecipes = await Recipe.find({});
      if(allRecipes.length < 1){
        return res.status(200).json("No recipes found")
      }
      return res.status(200).json(allRecipes);
    } catch (error) {
        return res.status(400).json("Error: No recipes found")
    }
  },

  async getSearchedRecipes({params}, res) {

    try {
        const searchResults = await Recipe.find({ingredients: params.query})
        return res.status(200).json(searchResults)
    } catch (err) {
        return res.status(400).json(err)
    }
  },

  async getSingleRecipe(req, res) {
    return res.status(202).json("Single recipe data goes here")
  },
};
