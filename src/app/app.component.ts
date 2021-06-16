import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isTruthy: boolean = false;

  @ViewChild('mainContentElement') mainContentElement: ElementRef | undefined;
  @ViewChild('navBarElement') navBarElement: ElementRef | undefined;

  @HostListener('document:click', ['$event'])
  clickOutside(event: any) {
    if (this.mainContentElement?.nativeElement.contains(event.target)) {
      console.log('clicked inside');
    } else if (this.navBarElement?.nativeElement.contains(event.target)) {
      console.log('clicked inside');
    } else {
      this.isTruthy = false;
      console.log('clicked outside');
    }
  }

  title = 'HauhiaNet';

  //Tests the ngIf in app-component template

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
