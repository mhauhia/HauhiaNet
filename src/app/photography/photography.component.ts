import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css'],
  host: {
    class: 'photography-routed',
  },
})
export class PhotographyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
