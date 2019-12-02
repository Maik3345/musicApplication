const config: Partial<EnvironmentConfig> = {
  REDUX_DEV_TOOLS: {
    trace: false
  },
  AYENDA_ENDPOINT: {
    version: "/api/v1/",
    base: "https://rubytify-ayenda.herokuapp.com",
    artists: "artists",
    albums: "albums",
    songs: "/songs"
  }
};

export default config;
