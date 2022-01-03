import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HauhiaNet';

  @ViewChild('mainContentElement') mainContentElement: ElementRef | undefined;
  @ViewChild('navBarElement') navBarElement: ElementRef | undefined;

  @HostListener('document:click', ['$event'])
  clickOutside(event: any) {
    if (this.mainContentElement?.nativeElement.contains(event.target)) {
      console.log('clicked inside');
      console.log('isTruthy is ' + this.isTruthy);
    } else if (this.navBarElement?.nativeElement.contains(event.target)) {
      console.log('clicked inside');
      console.log('isTruthy is ' + this.isTruthy);
    } else {
      this.isTruthy = false;
      console.log('clicked outside');
      console.log('isTruthy is ' + this.isTruthy);
    }
  }
  //isTruthy displays or hides Main-element in template via NgIf. Main-element is hidden until ViewSection() is called.
  isTruthy: boolean = false;

  //ViewSection method definition.
  viewSection() {
    this.isTruthy = true;
    console.log('isTruthy is ' + this.isTruthy);
  }

  //Sets default states for booleans to change backgrounds.
  elementHome: boolean = true;
  elementCV: boolean = true;
  elementPhotography: boolean = true;
  elementContact: boolean = true;

  elementHomeBlur: boolean = false;
  elementCVBlur: boolean = false;
  elementPhotographyBlur: boolean = false;
  elementContactBlur: boolean = false;

  //Write a function that sets boolean states to "true" for one of the above booleans and to "false" for remaining two booleans.
  //"True" means that background will be blurred. Attach function call to "clickOutside" -function to run it?

  //Methods are called in AppComponent template routing section. NgIf sets background according to ElementCV/Home/Contact boolean.

  changeHomeBackground() {
    this.viewSection();
    console.log('changeHomeBackground()');
    this.elementHome = true;
    this.elementCV = false;
    this.elementPhotography = false;
    this.elementContact = false;
    console.log('isTruthy is ' + this.isTruthy);
    console.log('elementHome is ' + this.elementHome);
    console.log('elementCV is ' + this.elementCV);
    console.log('elementContact is ' + this.elementContact);
  }

  changeCVBackground() {
    this.viewSection();
    console.log('viewCVBackground()');
    this.elementHome = false;
    this.elementCV = true;
    this.elementPhotography = false;
    this.elementContact = false;
    console.log('isTruthy is ' + this.isTruthy);
    console.log('elementHome is ' + this.elementHome);
    console.log('elementCV is ' + this.elementCV);
    console.log('elementContact is ' + this.elementContact);
  }

  changePhotographyBackground() {
    this.viewSection();
    console.log('changePhotographyBackground()');
    this.elementHome = false;
    this.elementCV = false;
    this.elementPhotography = true;
    this.elementContact = false;
    console.log('isTruthy is ' + this.isTruthy);
    console.log('elementHome is ' + this.elementHome);
    console.log('elementCV is ' + this.elementCV);
    console.log('elementContact is ' + this.elementContact);

    // show the photography container hidden by photography component

    let showhide = document.getElementById('container');

    showhide!.style.display = 'grid';
  }

  changeContactBackground() {
    this.viewSection();
    console.log('changeContactBackground()');
    this.elementHome = false;
    this.elementCV = false;
    this.elementPhotography = false;
    this.elementContact = true;
    console.log('isTruthy is ' + this.isTruthy);
    console.log('elementHome is ' + this.elementHome);
    console.log('elementCV is ' + this.elementCV);
    console.log('elementContact is ' + this.elementContact);
  }

  constructor() {}

  ngOnInit() {}
}
