const router = require('express').Router()

const {
    getAllRecipes,
    getSearchedRecipes,
    getSingleRecipe
} = require('../../controllers/recipe-controllers')

router.route('/').get(getAllRecipes)
router.route('/:query').get(getSearchedRecipes)
router.route('/id/:id').get(getSingleRecipe)

module.exports = router