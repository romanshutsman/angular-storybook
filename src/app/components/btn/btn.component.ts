import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() title: string = '';
  @Input() type: string = 'primary';
  @Input() disabled: boolean = false;
  @Input() onClick: any;

}
