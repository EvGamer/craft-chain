import * as actionTypes from '../actions/recipes';

export const recipesAdd = (payload) => ({
  type: actionTypes.RECIPE_ADD,
  payload,
})

export const recipesRemove = (id) => ({
  type: actionTypes.RECIPE_REMOVE,
  id,
})

export const recipesEdit = (payload) => ({
  type: actionTypes.RECIPE_EDIT,
  payload,
})

export const recipesAddIngredient = (itemId) => ({
  type: actionTypes.RECIPE_ADD_INGREDIENT,
  itemId,
})

export const recipesRemoveIngredient = (itemId) => ({
  type: actionTypes.RECIPE_REMOVE_INGREDIENT,
  itemId,
})

export const recipesAddResult = (itemId) => ({
  type: actionTypes.RECIPE_ADD_RESULT,
  itemId,
})

export const recipesRemoveResult = (itemId) => ({
  type: actionTypes.RECIPE_REMOVE_RESULT,
  itemId,
})
