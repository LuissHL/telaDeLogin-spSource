import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-default',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.scss'],
})
export class InputDefaultComponent {
  @Input() type!: string;
  @Input() placeholder!: string;
  value: string = '';
}
