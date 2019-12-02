import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import * as types from "./types";
import { IArtists } from "@src/app/shared";

const getArtists = createReducer(false).handleAction(
  types.GET_ARTIST_LIST,
  () => true
);

const artistsReceived = createReducer<Partial<IArtists[]> | []>(
  []
).handleAction(types.ARTIST_RECEIVED, (state, { payload }) => ({
  ...state,
  ...payload
}));

const setCurrentArtistReducer = createReducer<Partial<IArtists> | null>(
  null
).handleAction(types.SET_ARTIST, (state, { payload }) => ({
  ...state,
  ...payload
}));

export default combineReducers({
  artists: getArtists,
  artist: setCurrentArtistReducer,
  received: artistsReceived
});
