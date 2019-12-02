import { put, takeLatest } from "redux-saga/effects";
import config from "@src/config/dev";
import * as types from "./types";
import { IAlbums } from "@src/app/shared";
import path from "ramda/es/path";

const endpoint = config && config.AYENDA_ENDPOINT && config.AYENDA_ENDPOINT;

function* fetchSongs(params: any) {
  const album = path<IAlbums>(["payload"], params);
  console.log(album);
  if (album) {
    const url =
      endpoint &&
      `${endpoint.base + endpoint.version + endpoint.albums}/${album.id +
        endpoint.songs}`;
    console.log(url);
    const json = yield fetch(`${url}`).then(response => response.json());
    yield put({ type: types.SONGS_RECEIVED, payload: json.data });
  } else {
    yield put({ type: types.ERROR_ON_GET_SONGS });
  }
}
export function* actionWatcherGetSongs() {
  yield takeLatest(types.GET_SONGS_LIST, fetchSongs);
}
