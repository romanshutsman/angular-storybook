import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() title: string = '';
  @Input() type: string = 'primary';
  @Input() disabled: boolean = false;
  @Input() onBtnClick: any;
  @Output() buttonClick = new EventEmitter<any>();

  handleClick(event: any) {
    // this.onBtnClick?.();
    this.buttonClick.emit({evt: event, type: this.type});
  }


}
