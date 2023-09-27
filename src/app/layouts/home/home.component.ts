import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/animations/page-transition';
import { VideoPlayerService } from 'src/app/core/services/video-player/video-player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeAnimation],
})
export class HomeComponent implements OnInit{
  constructor(
    private videoPlayerService: VideoPlayerService,
  ) {}
  public isWatchingVideo: boolean;
  ngOnInit(): void {
    this.videoPlayerService.isViewingVideo.subscribe((value) => {
      this.isWatchingVideo = value;
    });
  }
  openVideo() {
    this.videoPlayerService.setIsViewingVideo = true;
  }
}
