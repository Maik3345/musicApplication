import { action } from "typesafe-actions";
import * as types from "./types";
import { IAlbums, IArtists } from "@src/app/shared";

export const getAlbumList = (artist: IArtists) =>
  action(types.GET_ALBUM_LIST, artist);

export const albumsReceived = (albums: Partial<IAlbums[]> | []) =>
  action(types.ALBUMS_RECEIVED, albums);
