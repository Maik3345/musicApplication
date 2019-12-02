import { useDispatch, useSelector } from "react-redux";
import { Location } from "history";
import { IAlbums, IArtists } from "../shared";
import { getAlbumList } from "./redux/actions";
import { useEffect } from "react";
import path from "ramda/es/path";
import {
  getSongsList,
  showFloatingReproducers,
  setSongsList,
  showAlbumListFloating,
  setSongToListen
} from "../redux/actions";

export const useAlbumList = () => {
  const dispatch = useDispatch();
  const location = useSelector<RootState, Location<any>>(
    state => state.router.location
  );
  const showFloatingReproducer: boolean = useSelector<RootState, any>(
    state => state.listSong.showFloatingReproducer
  );
  const showFloatingList: boolean = useSelector<RootState, any>(
    state => state.listSong.showFloatingAlbum
  );
  const artist: IArtists = useSelector<RootState, any>(
    state => state.artistsList.artist
  );
  const album: IAlbums = useSelector<RootState, any>(
    state => state.listSong.songsFromAlbum
  );

  const albumList: IAlbums[] = useSelector<RootState, any>(
    state => state.albumList.albumsReceived
  );

  const getAlbums = () => {
    if (artist) {
      dispatch(getAlbumList(artist));
    }
  };

  const getSongFromAlbum = (album: IAlbums) => {
    dispatch(getSongsList(album));
    dispatch(setSongsList(album));
    if (!showFloatingReproducer) {
      dispatch(showFloatingReproducers());
    }
    if (!showFloatingList) {
      dispatch(showAlbumListFloating());
    }
  };

  const viewSongList = () => {
    dispatch(setSongToListen({ play: false, song: 0 }));
  };

  const songToListen = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setSongToListen({ play: true, song: 0 }));
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return {
    artist,
    album,
    getAlbums,
    dispatch,
    albumList,
    location,
    getSongFromAlbum,
    songToListen,
    viewSongList
  };
};
