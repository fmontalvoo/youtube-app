import { Component, OnInit } from "@angular/core";

import { Video } from "src/app/models/youtube.models";

import { YoutubeService } from "src/app/services/youtube.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public videos: Video[] = [];
  // public videos: Array<Video> = [];

  constructor(private yts: YoutubeService) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  public loadVideos(): void {
    this.yts.getVideos()
      .subscribe((res) => {
        // this.videos = this.videos.concat(res);
        this.videos.push(...res);
        console.log(this.videos);
      });
  }
}
