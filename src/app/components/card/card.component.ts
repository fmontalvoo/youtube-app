import { Component, Input, OnInit } from "@angular/core";
import { Video } from "src/app/models/youtube.models";

import Swal from "sweetalert2";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input()
  public video!: Video;

  constructor() {}

  ngOnInit(): void {
  }

  public playVideo(video: Video): void {
    Swal.fire({
      html: `
      <h4>${video.title}</h4>
      <hr>
      <iframe width="100%" height="315" 
        src="https://www.youtube.com/embed/${video.resourceId.videoId}"}" 
        title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen>
      </iframe>`,
    });
  }
}
