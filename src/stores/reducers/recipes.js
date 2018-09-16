import { createReducer } from 'redux-create-reducer';

import * as actions from '../actions';
import { mapToMatch, byId } from '../../utils';
import { Recipe } from '../../classes';

const initialState = {
  list: []
};

export default createReducer(initialState, {
  [actions.RECIPES_ADD]: ({ ...state, list }, { payload }) => ({
    ...state, list: [ ...list, Recipe.fromRecord]
  })
});