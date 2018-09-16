import createReducer from 'redux-create-reducer';

import * as actions from '../actions';
import { Item } from '../../classes';
import { mapToMatch, byId } from '../../utils';

initialState = {
  list: []
}

const applyRecord = changes => item => item.cloneWithChanges(changes)

export default createReducer(initialState, {
  [actions.ITEMS_ADD]: ({ list, ...state }, { payload }) => ({
    ...state, list: [...list, Item.fromRecord(payload)],
  }),
  [actions.ITEMS_REMOVE]: ({ list, ...state }, { id }) => ({
    ...state, list: list.filter(item => item.id !== id),
  }),
  [actions.ITEMS_EDIT]: ({ list, ...state }, { payload }) => ({
    ...state, list: mapToMatch(list, byId(payload.id), applyRecord(payload)) 
  })
})