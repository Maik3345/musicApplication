import { action } from "typesafe-actions";
import * as types from "./types";
import { IArtists } from "@src/app/shared";

export const getArtisList = () => action(types.GET_ARTIST_LIST);

export const setCurrentArtist = (artist: Partial<IArtists> | null) =>
  action(types.SET_ARTIST, artist);

export const artistsReceived = (artists: Partial<IArtists[]> | []) =>
  action(types.ARTIST_RECEIVED, artists);
