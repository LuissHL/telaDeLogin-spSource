import { Component } from '@angular/core';
import { InputDefaultComponent } from '../input-default/input-default.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [InputDefaultComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  onClick() {
    console.log('button');
  }
}
