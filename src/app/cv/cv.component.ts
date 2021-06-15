import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  host: {
    class: 'cv-routed',
  },
})
export class CVComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
