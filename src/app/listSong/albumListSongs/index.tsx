import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import ImageIcon from "@material-ui/icons/Image";
import { ISong, getSeconds } from "@src/app/shared";
import React, { memo } from "react";
import styles from "./albumListSong.module.scss";
import Divider from "@material-ui/core/Divider";
import { ListItemSecondaryAction, Typography } from "@material-ui/core";
import { useListSong } from "..";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "transparent"
  }
}));

const SongsList = ({ song }: { song: ISong }) => {
  return (
    <>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={song.name} />
      <ListItemSecondaryAction>
        <Typography>{getSeconds(Number(song.duration_ms))}</Typography>
      </ListItemSecondaryAction>
    </>
  );
};

const AlbumListSongs = () => {
  const {
    showFloatingAlbum,
    songsList,
    songToListen,
    songSelected
  } = useListSong();
  const classes = useStyles();
  return (
    <div
      style={{
        maxHeight: showFloatingAlbum ? "500px" : "0",
        minHeight: showFloatingAlbum ? "200px" : "0",
        padding: showFloatingAlbum ? "1rem 2rem 72px 2rem" : "0",
        overflow: "auto"
      }}
      className={styles.albumListSongs}
    >
      <Typography variant="h6">Canciones</Typography>

      {songsList.length && (
        <List className={classes.root} dense={true}>
          {songsList.map((item, index) => (
            <>
              <ListItem
                selected={songSelected.song === index}
                button
                dense={true}
                onClick={() => songToListen(index)}
              >
                <SongsList song={item} />
                <Divider variant="inset" component="li" />
              </ListItem>
            </>
          ))}
        </List>
      )}
      {!songsList.length && <p>No se han encontrado canciones</p>}
    </div>
  );
};

export default memo(AlbumListSongs);
