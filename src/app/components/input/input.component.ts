import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgStyle} from "@angular/common";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: 'ok' | 'error' = 'ok';

  ngOnInit() {
    console.log(this.label)
  }

}
