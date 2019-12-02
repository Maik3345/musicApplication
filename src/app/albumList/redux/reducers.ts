import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import * as types from "./types";
import { IAlbums } from "@src/app/shared";

const getAlbumsReducer = createReducer(false).handleAction(
  types.GET_ALBUM_LIST,
  () => true
);

const albumsReceivedReducer = createReducer<Partial<IAlbums[]> | []>(
  []
).handleAction(types.ALBUMS_RECEIVED, (state, { payload }) => ({
  ...state,
  ...payload
}));

export default combineReducers({
  albums: getAlbumsReducer,
  albumsReceived: albumsReceivedReducer
});
