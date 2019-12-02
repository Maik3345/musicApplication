import { action } from "typesafe-actions";
import * as types from "./types";
import { IAlbums, ISong, SelectedSong } from "@src/app/shared";

export const showAlbumListFloating = () =>
  action(types.SHOW_ALBUM_LIST_FLOATING);
/**
 * Hide the AlbumListFloating of the application
 */
export const hideAlbumListFloating = () =>
  action(types.HIDE_ALBUM_LIST_FLOATING);

export const showFloatingReproducers = () =>
  action(types.SHOW_FLOATING_REPRODUCER);

export const hideFloatingReproducers = () =>
  action(types.HIDE_FLOATING_REPRODUCER);

export const applyAutoplay = () => action(types.APPLY_AUTOPLAY);

export const quitAutoplay = () => action(types.QUIT_AUTOPLAY);

export const applyRandomAutoplay = () => action(types.APPLY_AUTOPLAY_RANDOM);

export const quitRandomAutoplay = () => action(types.QUIT_AUTOPLAY_RANDOM);

export const setSongsList = (album: Partial<IAlbums> | null) =>
  action(types.SET_SONGS_LIST, album);

export const setSongToListen = (song: Partial<SelectedSong> | null) =>
  action(types.SELECTED_SONG, song);

export const getSongsList = (album: Partial<IAlbums> | null) =>
  action(types.GET_SONGS_LIST, album);

export const songsReceived = (artists: Partial<ISong[]> | []) =>
  action(types.SONGS_RECEIVED, artists);
