import { push } from "connected-react-router";
import { Location } from "history";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IArtists } from "../shared";
import { getArtisList, setCurrentArtist } from "./redux/actions";

export const useArtistList = () => {
  const dispatch = useDispatch();
  const artistList: IArtists[] = useSelector<RootState, any>(
    state => state.artistsList.received
  );
  const location = useSelector<RootState, Location<any>>(
    state => state.router.location
  );

  const getArtists = () => {
    dispatch(getArtisList());
  };

  const showArtistAlbums = (artist: IArtists) => {
    dispatch(setCurrentArtist(artist));
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

  useEffect(() => {
    getArtists();
  }, []);

  return {
    getArtists,
    showArtistAlbums,
    location,
    artistList,
    dispatch
  };
};
