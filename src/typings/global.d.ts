import { EnhancerOptions } from "redux-devtools-extension";
import { StateType, ActionType } from "typesafe-actions";
import { FirebaseConfig } from "../app/shared";

declare global {
  interface MyMap {
    [key: string]: any;
  }

  interface Action {
    type: string;
    payload: MyMap;
  }

  interface ReducerMap<T> {
    [key: string]: (state: T, action: Action) => T;
  }

  interface EnvironmentConfig {
    REDUX_DEV_TOOLS: EnhancerOptions;
    AYENDA_ENDPOINT: {
      version: string;
      base: string;
      albums: string;
      songs: string;
      artists: string;
    };
  }

  type Store = StateType<typeof import("@app/redux").default>;
  type RootAction = ActionType<typeof import("@app/redux/actions")>;
  type RootState = StateType<typeof import("@app/redux").rootReducer>;
}

export {};
