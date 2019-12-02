import { put, takeLatest } from "redux-saga/effects";
import config from "@src/config/dev";
import * as types from "./types";
import { IArtists } from "@src/app/shared";
import path from "ramda/es/path";

const endpoint = config && config.AYENDA_ENDPOINT && config.AYENDA_ENDPOINT;

function* fetchAlbums(params: any) {
  const artist = path<IArtists>(["payload"], params);
  if (artist) {
    const url =
      endpoint &&
      `${endpoint.base + endpoint.version + endpoint.artists}/${artist.id}/${
        endpoint.albums
      }`;
    console.log(url);
    const json = yield fetch(`${url}`).then(response => response.json());
    yield put({ type: types.ALBUMS_RECEIVED, payload: json.data });
  } else {
    yield put({ type: types.ERROR_ON_GET_ALBUMS });
  }
}
export function* actionWatcherGetAlbums() {
  yield takeLatest(types.GET_ALBUM_LIST, fetchAlbums);
}
