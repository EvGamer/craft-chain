import * as actionTypes from '../actions/items';

export const itemsAdd = (payload) => ({
  type: actionTypes.ITEMS_ADD,
  payload,
})

export const itemsRemove = (id) => ({
  type: actionTypes.ITEMS_REMOVE,
  id,
})

export const itemEdit = (payload) => ({
  type: actionTypes.ITEMS_EDIT,
  payload,
})

