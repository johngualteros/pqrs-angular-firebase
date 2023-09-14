import { Component } from '@angular/core';
import { fadeAnimation } from 'src/app/animations/page-transition';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [fadeAnimation],
})
export class SignUpComponent {

}
