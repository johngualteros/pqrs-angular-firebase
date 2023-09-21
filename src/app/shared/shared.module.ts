import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderGoBackSimpleComponent } from './components/header-go-back-simple/header-go-back-simple.component';
import { RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './components/video-player/video-player.component';



@NgModule({
  declarations: [
    HeaderGoBackSimpleComponent,
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderGoBackSimpleComponent,
    VideoPlayerComponent
  ]
})
export class SharedModule { }
