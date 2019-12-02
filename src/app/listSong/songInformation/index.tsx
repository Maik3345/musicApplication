import React from "react";
import styles from "./songInformation.module.scss";
import { getSeconds } from "@src/app/shared";
import { Typography } from "@material-ui/core";
import { useListSong } from "..";

export const SongInformation = () => {
  const { song, album } = useListSong();
  if (!album || !song) return null;
  return (
    <div className={styles.artistInformation}>
      <div>
        <img src={album.image} alt={song.name} />
      </div>
      <div className={styles.information}>
        <Typography variant="h6">{song.name}</Typography>
        <span>duración: {getSeconds(Number(song.duration_ms))}</span>
      </div>
    </div>
  );
};
