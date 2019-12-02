export interface ArtistsResponse {
  data: IArtists[];
}

export interface IArtists {
  id: number;
  name: string;
  image: string;
  genres: string[];
  popularity: string;
  spotify_url: string;
  spotify_id: string;
  created_at: string;
  updated_at: string;
}
