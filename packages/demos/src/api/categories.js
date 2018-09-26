import { getOrDelete } from './utils';
import Configs from './configs';

const { baseUrl, categories } = Configs.api;
const categoriesUrl = `${baseUrl}${categories}`;

/**
 * Gets all user categories
 * @param {function} callback The function to handle errors
 */
export const getCategories = async callback =>
  await getOrDelete(categoriesUrl, callback);

/**
 * Gets a category whose id is given
 * @param {number} categoryId The Id of the category to get
 * @param {function} callback The function to handle errors
 */
export const getCategory = async (categoryId, callback) =>
  await getOrDelete(`${categoriesUrl}${categoryId}`, callback);
