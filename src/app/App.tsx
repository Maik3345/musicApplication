import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { ConnectedRouter } from "connected-react-router";
import React, { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import store, { history, persistor } from "./redux";
import routes from "./routes";
import { Header } from "./shared/components/header";
import { PersistGate } from "redux-persist/integration/react";
import ListSongs from "./listSong/Page";
import SnackbarMaterial from "./shared/components/snackbar";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <PersistGate loading={<p>Loading</p>} persistor={persistor}>
        <ConnectedRouter history={history}>
          <CssBaseline />
          <SnackbarMaterial />
          <Header />
          <ListSongs />
          <Switch>
            {routes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </ReduxProvider>
  </ThemeProvider>
);

export default App;
