import { Component } from '@angular/core';
import { fadeAnimation } from 'src/app/animations/page-transition';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [fadeAnimation],
})
export class SignInComponent {

}
