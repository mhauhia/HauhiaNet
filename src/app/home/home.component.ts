import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    class: 'home-routed',
  },
})
export class HomeComponent implements OnInit {
  constructor() {}

  birthdate = new Date('1985/10/28').valueOf();
  cur = new Date().valueOf();
  diff: number = this.cur - this.birthdate; // This is the difference in milliseconds
  age = Math.floor(this.diff / 31557600000); // Divide by 1000*60*60*24*365.25

  ngOnInit(): void {}
}
