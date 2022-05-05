import { Injectable } from "@angular/core";

import { HttpClient, HttpParams } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";

import { Item, Video, YoutubeModel } from "../models/youtube.models";

import { environment } from "src/environments/environment.dev";

@Injectable({
  providedIn: "root",
})
export class YoutubeService {
  private API_KEY: string = environment.YoutubeApiKey;
  private PLAYLIST_ID: string = environment.playlistId;
  private API_URL: string = "https://www.googleapis.com/youtube/v3";

  private nextPageToken: string = "";

  constructor(private http: HttpClient) {}

  public getVideos(): Observable<Video[]> {
    const url = `${this.API_URL}/playlistItems`;
    const params = new HttpParams()
      .set("part", "snippet")
      .set("maxResults", "5")
      .set("key", this.API_KEY)
      .set("playlistId", this.PLAYLIST_ID);

    return this.http.get<YoutubeModel>(url, { params })
      .pipe(
        map((resp: YoutubeModel) => {
          this.nextPageToken = resp.nextPageToken;
          return resp.items;
        }),
        map((items: Item[]) => items.map((item) => item.snippet)),
      );
  }
}
