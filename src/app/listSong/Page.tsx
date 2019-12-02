import React, { memo } from "react";
import styles from "./listSong.module.scss";
import { useListSong } from "./";
import AlbumListSongs from "./albumListSongs";
import PlayMusic from "./musicReproductor";
import { SongInformation } from "./songInformation";
import { PlayMusicOptions } from "./songOptions";

const ListSongs = () => {
  const { showFloatingReproducer } = useListSong();

  if (!showFloatingReproducer) return null;

  return (
    <div className={styles.floatingContainer}>
      <AlbumListSongs />
      <div className={styles.floatingSongs}>
        <PlayMusic />
        <SongInformation />
        <PlayMusicOptions />
      </div>
    </div>
  );
};

export default memo(ListSongs);
