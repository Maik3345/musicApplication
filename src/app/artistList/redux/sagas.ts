import { put, takeLatest } from "redux-saga/effects";
import config from "@src/config/dev";
import { GET_ARTIST_LIST, ARTIST_RECEIVED } from "./types";

const endpoint = config && config.AYENDA_ENDPOINT && config.AYENDA_ENDPOINT;

function* fetchArtists() {
  const url =
    endpoint && `${endpoint.base + endpoint.version + endpoint.artists}`;
  const json = yield fetch(`${url}`).then(response => response.json());
  yield put({ type: ARTIST_RECEIVED, payload: json.data });
}
export function* actionWatcherGetArtist() {
  yield takeLatest(GET_ARTIST_LIST, fetchArtists);
}
