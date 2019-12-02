import { SnackbarProps } from "@material-ui/core";
import { push } from "connected-react-router";
import { Location } from "history";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSnackBar } from "../redux/actions";
import { IAlbums, IArtists, ISong, SelectedSong } from "../shared";
import {
  applyAutoplay,
  applyRandomAutoplay,
  getSongsList,
  hideAlbumListFloating,
  quitAutoplay,
  quitRandomAutoplay,
  setSongToListen,
  showAlbumListFloating
} from "./redux/actions";

export const useListSong = () => {
  const dispatch = useDispatch();
  const location = useSelector<RootState, Location<any>>(
    state => state.router.location
  );
  const showFloatingAlbum: boolean = useSelector<RootState, any>(
    state => state.listSong.showFloatingAlbum
  );
  const autoplay: boolean = useSelector<RootState, any>(
    state => state.listSong.autoplay
  );
  const random: boolean = useSelector<RootState, any>(
    state => state.listSong.randomPlay
  );
  const showFloatingReproducer: boolean = useSelector<RootState, any>(
    state => state.listSong.showFloatingReproducer
  );

  const artist: IArtists = useSelector<RootState, any>(
    state => state.artistsList.artist
  );

  const album: IAlbums = useSelector<RootState, any>(
    state => state.listSong.songsFromAlbum
  );

  const songsList: ISong[] = useSelector<RootState, any>(
    state => state.listSong.songsReceived
  );
  const currentSongsList = _.toArray(songsList);

  const songSelected: SelectedSong = useSelector<RootState, any>(
    state => state.listSong.songToListen
  );
  const [song, setSong] = useState();

  const viewSnackbar = (options: SnackbarProps) => {
    dispatch(showSnackBar(options));
  };

  useEffect(() => {
    if (songSelected) {
      if (currentSongsList.length >= songSelected.song) {
        setSong(currentSongsList[songSelected.song]);
      }
    }
  }, [songSelected, songsList]);

  const showArtistAlbums = () => {
    dispatch(
      push({
        ...location,
        state: {
          ...location.state,
          artist
        },
        pathname: "/albums"
      })
    );
  };

  const setShowFloatingAlbum = (state: boolean) => {
    if (state) {
      dispatch(showAlbumListFloating());
      return;
    }
    dispatch(hideAlbumListFloating());
  };

  const getSongs = () => {
    dispatch(getSongsList(album));
  };

  const songToListen = (position: number) => {
    dispatch(setSongToListen({ play: true, song: position }));
  };

  const setAutoplay = (state: boolean) => {
    if (state) {
      dispatch(applyAutoplay());
      return;
    }
    dispatch(quitAutoplay());
  };

  const setRandom = (state: boolean) => {
    if (state) {
      dispatch(applyRandomAutoplay());
      return;
    }
    dispatch(quitRandomAutoplay());
  };

  return {
    autoplay,
    random,
    setRandom,
    setAutoplay,
    viewSnackbar,
    dispatch,
    getSongs,
    showFloatingAlbum,
    showArtistAlbums,
    setShowFloatingAlbum,
    album,
    location,
    songToListen,
    songSelected,
    showFloatingReproducer,
    song,
    songsList: currentSongsList
  };
};
