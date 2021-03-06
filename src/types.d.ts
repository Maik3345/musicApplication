import { StateType, ActionType } from 'typesafe-actions';

export type RootAction = ActionType<typeof import('@app/redux/actions')>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}