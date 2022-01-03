import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery1',
  templateUrl: './gallery1.component.html',
  styleUrls: ['./gallery1.component.css'],
  host: {
    class: 'gallery1-routed',
  },
})
export class Gallery1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
