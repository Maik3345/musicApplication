export interface SongsResponse {
  data: ISong[];
}

export interface ISong {
  id: number;
  name: string;
  spotify_url: string;
  preview_url: string;
  duration_ms: string;
  explicit: Explicit;
}

export enum Explicit {
  F = "f"
}

export interface SelectedSong {
  song: number;
  play: boolean;
}
