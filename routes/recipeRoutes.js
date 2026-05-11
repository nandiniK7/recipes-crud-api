const express = require("express");

const router = express.Router();

const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");


// Create Recipe
router.post("/", createRecipe);


// Get All Recipes
router.get("/", getAllRecipes);


// Get Recipe By ID
router.get("/:id", getRecipeById);


// Update Recipe
router.put("/:id", updateRecipe);


// Delete Recipe
router.delete("/:id", deleteRecipe);


module.exports = router;