import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import * as types from "./types";
import { IAlbums, ISong, SelectedSong } from "@src/app/shared";

const getSongsFromAlbumReducer = createReducer(false).handleAction(
  types.GET_SONGS_LIST,
  () => true
);

const floatingAlbumListReducer = createReducer(false)
  .handleAction(types.SHOW_ALBUM_LIST_FLOATING, () => true)
  .handleAction(types.HIDE_ALBUM_LIST_FLOATING, () => false);

const floatingReproducerReducer = createReducer(false)
  .handleAction(types.SHOW_FLOATING_REPRODUCER, () => true)
  .handleAction(types.HIDE_FLOATING_REPRODUCER, () => false);

const autoPlayReducer = createReducer(false)
  .handleAction(types.APPLY_AUTOPLAY, () => true)
  .handleAction(types.QUIT_AUTOPLAY, () => false);

const randomPlayReducer = createReducer(false)
  .handleAction(types.APPLY_AUTOPLAY_RANDOM, () => true)
  .handleAction(types.QUIT_AUTOPLAY_RANDOM, () => false);

const setSongFromAlbum = createReducer<Partial<IAlbums> | null>(
  null
).handleAction(types.SET_SONGS_LIST, (state, { payload }) => ({
  ...state,
  ...payload
}));

const songsReceivedReducer = createReducer<Partial<ISong[]> | []>(
  []
).handleAction(types.SONGS_RECEIVED, (state, { payload }) => ({
  ...payload
}));

const setSongToListenReducer = createReducer<Partial<SelectedSong> | null>(
  null
).handleAction(types.SELECTED_SONG, (state, { payload }) => ({
  ...payload
}));

export default combineReducers({
  showFloatingReproducer: floatingReproducerReducer,
  songToListen: setSongToListenReducer,
  getSongsFromAlbum: getSongsFromAlbumReducer,
  songsFromAlbum: setSongFromAlbum,
  songsReceived: songsReceivedReducer,
  showFloatingAlbum: floatingAlbumListReducer,
  autoplay: autoPlayReducer,
  randomPlay: randomPlayReducer
});
