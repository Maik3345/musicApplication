import React from "react";
import HeaderAlbum from "./headerAlbum";
import ListAlbum from "./listAlbum";
import styles from "./albums.module.scss";

const AlbumList = () => {
  return (
    <div className={styles.albumsContainer}>
      <HeaderAlbum />
      <ListAlbum />
    </div>
  );
};

export default AlbumList;
