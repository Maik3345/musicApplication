// import { RootAction, RootState, Services } from 'redux-types';
import config from "@src/config";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import * as reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fakeState } from "./fake-state";
import rootSaga from "./sagas";

// Options for redux dev tools
const composeEnhancers = composeWithDevTools({
  ...config.REDUX_DEV_TOOLS
});

// Browsing history
export const history = createBrowserHistory();

// Combine all reducers
export const rootReducer = combineReducers({
  router: connectRouter(history),
  ...reducers
});

const persistConfig = {
  storage,
  key: "root",
  blacklist: ["router"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

// Configure middlewares
const middlewares = [routerMiddleware(history), sagaMiddleware];

// Compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// create store
const store = createStore(persistedReducer, fakeState, enhancer);

sagaMiddleware.run(rootSaga);

// Export store singleton instance
export const persistor = persistStore(store);
export default store;
