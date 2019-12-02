import { Container, Icon, IconButton, ListItemSecondaryAction } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IAlbums } from "@src/app/shared";
import _ from "lodash";
import React from "react";
import { useAlbumList } from "..";
import styles from "./albumsList.module.scss";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",
    fontSize: "14px"
  },
  inline: {
    display: "inline"
  }
}));

const AlbumsList = ({
  album,
  getSongFromAlbum,
  songToListen
}: {
  album: IAlbums;
  songToListen: (e: any) => void;
  getSongFromAlbum: (album: IAlbums) => void;
}) => {
  const classes = useStyles();
  return (
    <>
      <ListItemAvatar>
        <Avatar alt={album.name} src={album.image} />
      </ListItemAvatar>
      <ListItemText
        primary={album.name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="caption"
              className={classes.inline}
              color="textPrimary"
            >
              Canciones:
            </Typography>
            {album.total_tracks}
          </React.Fragment>
        }
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={(e: any) => {
            songToListen(e);
            getSongFromAlbum(album);
          }}
          aria-label="play"
        >
          <Icon>play_arrow</Icon>
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
};

const ListAlbum = () => {
  const classes = useStyles();
  const {
    getSongFromAlbum,
    songToListen,
    albumList,
    album,
    viewSongList
  } = useAlbumList();

  const albums = _.toArray(albumList);
  if (!albums.length || !albums) return null;

  return (
    <Container className={styles.albumsListContainer}>
      <Typography variant="h6">Álbumes</Typography>
      <List className={classes.root}>
        {albums.map(item => (
          <>
            <ListItem
              selected={album.id === item.id}
              button
              onClick={() => {
                viewSongList();
                getSongFromAlbum(item);
              }}
              alignItems="flex-start"
            >
              <AlbumsList
                album={item}
                songToListen={songToListen}
                getSongFromAlbum={getSongFromAlbum}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </Container>
  );
};

export default ListAlbum;
