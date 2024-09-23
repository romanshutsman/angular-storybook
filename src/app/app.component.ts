import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taskbox';

  onBtnClick(e: any) {
    console.log(e);
    alert(e.type + 'Clicked!')
  }
}
