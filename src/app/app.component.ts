import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HauhiaNet';

  //Tests the ngIf in app-component template
  isTruthy: boolean = false;
  viewSection() {
    this.isTruthy = true;
    console.log(this.isTruthy);
  }

  //Array to background styles
  backgroundImages = [
    '.background-image-1',
    '.background-image-3',
    '.background-image-4',
  ];
  constructor() {}
}
