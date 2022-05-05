import { Component, Input, OnInit } from "@angular/core";
import { Video } from "src/app/models/youtube.models";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() public video!: Video;

  constructor() {}

  ngOnInit(): void {
  }
}
