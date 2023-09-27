import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Output,
  VERSION,
  ViewChild,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { VideoPlayerService } from 'src/app/core/services/video-player/video-player.service';

interface Document extends HTMLDocument {
  mozCancelFullScreen: () => void;
  webkitExitFullscreen: () => void;
  mozFullScreenElement: () => void;
  webkitFullscreenElement: () => void;
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;

  public displayControllsOpacity = 0;
  public isPlaying = false;
  public isFullVolume = true;
  public isFullScreen = false;
  public watchedProgress = 0;
  public loadPercentage = 0;
  public isLoadingContent = false;
  public durationRemaining = '00:00';
  public controlsTimeout: any;

  @ViewChild('video') video: ElementRef;
  @ViewChild('videoContainer') videoContainer: ElementRef;
  @ViewChild('progressBar') progressBar: ElementRef;
  public videoElement: HTMLVideoElement;

  constructor(@Inject(DOCUMENT) private document: Document,
    private videoPlayerService: VideoPlayerService
  ) { }

  closeVideoPlayer() {
    this.videoPlayerService.setIsViewingVideo = false;
  }

  ngAfterViewInit(): void {
    this.videoElement = this.video.nativeElement;
    this.videoContainer.nativeElement.addEventListener('mousemove', () => {
      this.displayControls();
    });
    this.document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        this.isFullScreen = false;
      } else {
        this.isFullScreen = true;
      }
    });

    this.document.addEventListener('keyup', (event) => {
      if (event.code === 'Space') {
        this.playPause();
      }
      if (event.code === 'KeyM') {
        this.toggleMute();
      }
      if (event.code === 'KeyF') {
        this.toggleFullScreen();
      }
      this.displayControls();
    });

    this.videoElement.addEventListener('timeupdate', () => {
      this.watchedProgress =
        (this.videoElement.currentTime / this.videoElement.duration) * 100;

      const totalSecondsRemaining =
        this.videoElement.duration - this.videoElement.currentTime;
      const time = new Date("");
      time.setSeconds(totalSecondsRemaining);
      let hours = null;

      if (totalSecondsRemaining >= 3600) {
        hours = time.getHours().toString().padStart(2, '0');
      }

      let minutes = time.getMinutes().toString().padStart(2, '0');
      let seconds = time.getSeconds().toString().padStart(2, '0');

      this.durationRemaining = `${hours ? hours + ':' : ''
        }${minutes}:${seconds}`;
    });

    this.progressBar.nativeElement.addEventListener('click', (event: any) => {
      const progressBarEle = this.progressBar.nativeElement as HTMLElement;
      const pos =
        (event.pageX -
          (progressBarEle.offsetLeft + progressBarEle.offsetLeft)) /
        progressBarEle.offsetWidth;
      this.videoElement.currentTime = pos * this.videoElement.duration;
    });

    this.videoElement.addEventListener('progress', () => {
      var range = 0;
      var bf = this.videoElement.buffered;
      var time = this.videoElement.currentTime;
      while (!(bf.start(range) <= time && time <= bf.end(range))) {
        range += 1;
      }
      var loadStartPercentage = bf.start(range) / this.videoElement.duration;
      var loadEndPercentage = bf.end(range) / this.videoElement.duration;
      this.loadPercentage = loadEndPercentage * 100;
    });

    this.videoElement.addEventListener('waiting', (data) => {
      this.isLoadingContent = true;
      this.isPlaying = false;
    });
    this.videoElement.addEventListener('playing', (data) => {
      this.isLoadingContent = false;
      this.isPlaying = true;
    });

    this.videoElement.addEventListener('ended', (data) => {
      this.isPlaying = false;
    });

  }

  displayControls() {
    this.displayControllsOpacity = 1;
    document.body.style.cursor = 'initial';
    if (this.controlsTimeout) {
      clearTimeout(this.controlsTimeout);
    }
    this.controlsTimeout = setTimeout(() => {
      if (this.isPlaying) {
        this.displayControllsOpacity = 0;
      } else {
        this.displayControllsOpacity = 1;
      }
      document.body.style.cursor = 'none';
    }, 5000);
  }

  playPause() {
    if (this.videoElement.paused) {
      this.videoElement.play();
      this.isPlaying = true;
    } else {
      this.videoElement.pause();
      this.isPlaying = false;
    }
  }

  toggleMute() {
    this.videoElement.muted = !this.videoElement.muted;
    if (this.videoElement.muted) {
      this.isFullVolume = false;
    } else {
      this.isFullVolume = true;
    }
  }

  toggleFullScreen() {
    if (
      !document.fullscreenElement &&
      !(document as Document).webkitFullscreenElement
    ) {
      this.openFullscreen();
    } else {
      this.closeFullscreen();
    }
  }

  openFullscreen() {
    if (this.videoContainer.nativeElement.requestFullscreen) {
      this.videoContainer.nativeElement.requestFullscreen();
    } else if (this.videoContainer.nativeElement.webkitRequestFullscreen) {
      /* Safari */
      this.videoContainer.nativeElement.webkitRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    if ((document as Document).exitFullscreen) {
      (document as Document).exitFullscreen();
    } else if ((document as Document).webkitExitFullscreen) {
      /* Safari */
      (document as Document).webkitExitFullscreen();
    }
  }

  addTime(seconds: number = 10) {
    this.videoElement.currentTime += seconds;
  }
}
