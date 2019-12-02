import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Icon } from "@material-ui/core";
import styles from "./songOptions.module.scss";
import { useListSong } from "..";

const MenuOptions = ({
  showArtistAlbums
}: {
  showArtistAlbums: () => void;
}) => {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-label="more"
        aria-owns="simple-menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        variant="selectedMenu"
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200
          }
        }}
      >
        <MenuItem
          key={"goToArtist"}
          onClick={() => {
            showArtistAlbums();
            handleClose();
          }}
        >
          ir a la página del artista
        </MenuItem>
      </Menu>
    </>
  );
};

export const PlayMusicOptions = () => {
  const {
    setShowFloatingAlbum,
    showFloatingAlbum,
    song,
    showArtistAlbums,
    autoplay,
    random,
    setAutoplay,
    setRandom
  } = useListSong();
  if (!song) return null;

  return (
    <div className={styles.playMusicOptions}>
      <Tooltip
        title="Iniciar reproducción automatica"
        aria-label="automatic_play"
      >
        <IconButton onClick={() => setAutoplay(!autoplay)} aria-label="show">
          <Icon
            className={`${styles.iconOptions} ${!autoplay &&
              styles.disabledState}`}
          >
            play_circle_filled
          </Icon>
        </IconButton>
      </Tooltip>

      <Tooltip title="Reproducción aleatoría" aria-label="random">
        <IconButton onClick={() => setRandom(!random)} aria-label="show">
          <Icon
            className={`${styles.iconOptions} ${!random &&
              styles.disabledState}`}
          >
            shuffle
          </Icon>
        </IconButton>
      </Tooltip>

      {!showFloatingAlbum && (
        <div onClick={() => setShowFloatingAlbum(true)}>
          <Tooltip title="Visualizar lista de canciones" aria-label="show">
            <IconButton aria-label="show">
              <Icon className={styles.iconOptions}>arrow_drop_up</Icon>
            </IconButton>
          </Tooltip>
        </div>
      )}
      {showFloatingAlbum && (
        <div onClick={() => setShowFloatingAlbum(false)}>
          <Tooltip title="Ocultar lista de canciones" aria-label="hide">
            <IconButton aria-label="hide">
              <Icon className={styles.iconOptions}>arrow_drop_down</Icon>
            </IconButton>
          </Tooltip>
        </div>
      )}
      <a href={song.spotify_url} target="_blank">
        <Tooltip title="Escuchar en spotify" aria-label="listen">
          <IconButton aria-label="show">
            <Icon className={styles.iconOptions}>open_in_new</Icon>
          </IconButton>
        </Tooltip>
      </a>

      <MenuOptions showArtistAlbums={showArtistAlbums} />
    </div>
  );
};
