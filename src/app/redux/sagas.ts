import { actionWatcherGetArtist } from "../artistList/redux/sagas";
import { all } from "redux-saga/effects";
import { actionWatcherGetAlbums } from "../albumList/redux/sagas";
import { actionWatcherGetSongs } from "../listSong/redux/sagas";
export * from "@app/artistList/redux/sagas";

export default function* rootSaga() {
  yield all([
    actionWatcherGetArtist(),
    actionWatcherGetAlbums(),
    actionWatcherGetSongs()
  ]);
}
