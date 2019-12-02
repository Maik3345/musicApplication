import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavigationLink } from "@src/app/shared/models";
import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";

interface IAppBar {
  navigation: NavigationLink[];
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const HeaderAppBar = (props: IAppBar) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Ayenda prueba
          </Typography>
          {props.navigation.map(item => (
            <Button onClick={() => dispatch(push(item.url))} color="inherit">
              {item.name}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderAppBar;
