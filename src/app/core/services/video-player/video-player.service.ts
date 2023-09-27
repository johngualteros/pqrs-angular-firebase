import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  constructor() { }
  private isViewingVideo$ = new BehaviorSubject<boolean>(false);
  get isViewingVideo() {
    return this.isViewingVideo$.asObservable();
  }
  set setIsViewingVideo(value: boolean) {
    this.isViewingVideo$.next(value);
  }
}
