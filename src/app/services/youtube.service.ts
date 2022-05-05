import { Injectable } from "@angular/core";

import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from "src/environments/environment.dev";

@Injectable({
  providedIn: "root",
})
export class YoutubeService {
  private API_KEY = environment.YoutubeApiKey;
  private PLAYLIST_ID = environment.playlistId;
  private API_URL = "https://www.googleapis.com/youtube/v3";

  constructor(private http: HttpClient) {}

  public getVideos() {
    const url = `${this.API_URL}/playlistItems`;
    const params = new HttpParams()
      .set("part", "snippet")
      .set("maxResults", "5")
      .set("key", this.API_KEY)
      .set("playlistId", this.PLAYLIST_ID);

    return this.http.get(url, { params });
  }
}
