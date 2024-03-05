import { Component } from '@angular/core';
import { InputDefaultComponent } from '../input-default/input-default.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [InputDefaultComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  onClick() {
    console.log('button');
  }
}
