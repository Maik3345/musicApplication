import React, { createRef, useEffect, useState, memo, useMemo } from "react";
import styles from "./musicReproductor.module.scss";
import { Tooltip, IconButton, Icon } from "@material-ui/core";
import { useListSong } from "..";

const PlayMusic = () => {
  const {
    song,
    songSelected,
    songToListen,
    songsList,
    autoplay,
    random,
    viewSnackbar,
    setAutoplay
  } = useListSong();

  const audioInput = createRef<HTMLAudioElement>();
  const nextButton = createRef<HTMLButtonElement>();
  const [numberOfTry, setNumberOfTry] = useState(0);

  const audioOptions = useMemo(
    () =>
      song ? (
        <audio
          className={styles.audioReproducer}
          ref={audioInput}
          controls={true}
          onEnded={() => onEndMusic()}
          onCanPlay={() => {}}
          onError={() => onErrorPlay()}
        >
          <source src={song.preview_url} type="audio/mpeg" />
        </audio>
      ) : null,
    [song]
  );

  const onEndMusic = () => {
    if (autoplay && nextButton && nextButton.current) {
      nextButton.current.click();
    }
  };

  const onAutoplayChange = () => {
    if (audioInput && audioInput.current && nextButton.current) {
      if (audioInput.current.ended) {
        nextButton.current.click();
      }
    }
  };

  const onTrackChange = function() {
    if (audioInput && audioInput.current) {
      audioInput.current.load();

      if (songSelected && songSelected.play) {
        audioInput.current.play();
        return;
      }
    }
  };

  const getSongToListen = () => {
    if (random) {
      return Math.floor(Math.random() * (songsList.length + 1));
    }
    const nextSong = songSelected.song + 1;
    if (nextSong >= songsList.length) {
      return 0;
    }
    return nextSong;
  };

  const onErrorPlay = () => {
    if (autoplay && numberOfTry <= 4) {
      setNumberOfTry(state => {
        return state + 1;
      });
      songToListen(getSongToListen());
    }
    if (numberOfTry > 4) {
      setAutoplay(false);
      viewSnackbar({
        open: true,
        message: `Opps, no se ha podido cargar la canción, ${
          autoplay ? "Hemos desactivado la reproducción automatica." : ""
        }`,
        autoHideDuration: 3000
      });
    } else {
      viewSnackbar({
        open: true,
        message: `Opps, no se ha podido cargar la canción`,
        autoHideDuration: 2000
      });
    }
  };

  useEffect(() => {
    onAutoplayChange();
  }, [autoplay]);

  useEffect(() => {
    onTrackChange();
  }, [song, songToListen]);

  if (!song) return null;
  return (
    <div className={styles.playMusic}>
      <Tooltip
        className={styles.musicOptions}
        title="Canción anterior"
        aria-label="previous"
      >
        <IconButton
          onClick={() => songToListen(songSelected.song - 1)}
          disabled={songSelected.song <= 0}
          aria-label="previous"
        >
          <Icon className={styles.iconOptions}>skip_previous</Icon>
        </IconButton>
      </Tooltip>

      {audioOptions}

      <Tooltip
        className={styles.musicOptions}
        title="Siguiente canción"
        aria-label="next"
      >
        <IconButton
          ref={nextButton}
          onClick={() => songToListen(getSongToListen())}
          disabled={songSelected.song >= songsList.length}
          aria-label="next"
        >
          <Icon className={styles.iconOptions}>skip_next</Icon>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default memo(PlayMusic);
