import AlbumList from "@app/albumList/Page";
import ArtistList from "@app/artistList/Page";

const routes = [
  {
    path: "/",
    component: ArtistList,
    exact: true
  },
  {
    path: "/albums",
    component: AlbumList,
    exact: true
  },
  {
    path: "/artists",
    component: ArtistList,
    exact: true
  }
];

export default routes;
