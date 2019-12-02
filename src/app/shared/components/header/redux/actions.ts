import { NavigationLink } from '@shared/models';
import { action } from 'typesafe-actions';
import * as types from './types';

export const showHeader = () => action(types.SHOW_HEADER);
export const hideHeader = () => action(types.HIDE_HEADER);
export const setNavigationList = (navigation: Partial<NavigationLink[]> | []) =>
  action(types.SET_NAVIGATION_LIST, navigation);
