import React from "react";
import styles from "./headerAlbum.module.scss";
import { Typography, Icon } from "@material-ui/core";
import { useAlbumList } from "..";

const HeaderAlbum = () => {
  const { artist } = useAlbumList();

  if (!artist) return null;

  return (
    <div className={styles.headerAlbumContainer}>
      <div className={styles.imageArtist}>
        <img src={artist.image} alt={artist.name} />
      </div>
      <div className={styles.albumInformation}>
        <Typography className={styles.nameArtist} variant="h3" component="h1">
          {artist.name}
        </Typography>
        <div className={styles.popularity}>
          <Icon>start</Icon>
          <Typography variant="h6">{artist.popularity}</Typography>
        </div>
      </div>
    </div>
  );
};

export default HeaderAlbum;
