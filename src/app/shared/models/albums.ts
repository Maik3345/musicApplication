export interface AlbumsResponse {
  data: IAlbums[];
}

export interface IAlbums {
  id: number;
  name: string;
  image: string;
  spotify_url: string;
  total_tracks: number;
}
