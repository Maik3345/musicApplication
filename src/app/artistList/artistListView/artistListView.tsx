import React from "react";
import { IArtists } from "@src/app/shared";
import _ from "lodash";
import styles from "./artistListView.module.scss";
import { useArtistList } from "..";

const ArtistItem = ({
  artist,
  showArtistAlbums
}: {
  artist: IArtists;
  showArtistAlbums: (artist: IArtists) => void;
}) => {
  return (
    <div className={styles.artistItemContainer}>
      <a
        onClick={() => showArtistAlbums(artist)}
        className={styles.artistItem}
        style={{
          background: `url("${artist.image}") top center/cover no-repeat`
        }}
      >
        <div className={styles.itemInformation}>
          <p>{artist.name}</p>
        </div>
      </a>
    </div>
  );
};

const ArtistListView = () => {
  const { artistList, showArtistAlbums } = useArtistList();

  const artists = _.toArray(artistList);
  if (!artists.length) return null;
  return (
    <div className={styles.artistContainer}>
      {artists.map(item => (
        <ArtistItem artist={item} showArtistAlbums={showArtistAlbums} />
      ))}
    </div>
  );
};

export default ArtistListView;
