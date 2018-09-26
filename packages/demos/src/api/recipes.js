import Configs from "./configs";
import { getOrDelete } from "./utils";

const { baseUrl, recipesUrl } = Configs.api;
const combinedRecipeUrl = `${baseUrl}${recipesUrl}`;

/**
 * Gets all user recipes
 * @param {function} errorHandler Function to handle errors
 */
export const getRecipes = async errorHandler =>
  await getOrDelete(combinedRecipeUrl, errorHandler);

export const getRecipe = async (recipeId, errorHandler) =>
  await getOrDelete(combinedRecipeUrl + recipeId, errorHandler);
