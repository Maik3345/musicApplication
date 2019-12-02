import { combineReducers } from 'redux';
import * as types from './types';
import { createReducer } from 'typesafe-actions';
import { NavigationLink } from '@shared/models';

const headerVisibilityReducer = createReducer(false)
  .handleAction(types.SHOW_HEADER, () => true)
  .handleAction(types.HIDE_HEADER, () => false);

const setNavigationListReducer = createReducer<Partial<NavigationLink[]> | []>([]).handleAction(
  types.SET_NAVIGATION_LIST,
  (_state, { payload }) => ([...payload]),
);

export default combineReducers({
  visibility: headerVisibilityReducer,
  navigation: setNavigationListReducer,
});
