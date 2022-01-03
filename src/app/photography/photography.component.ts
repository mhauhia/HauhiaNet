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
  showCategories: boolean = true;
  showGallery: boolean = false;
  viewGallery() {
    this.showGallery = true;

    let showhide = document.getElementById('container');

    console.log('Showhide is' + showhide);

    showhide!.style.display = 'none';

    console.log('Show gallery is ' + this.showGallery);
  }

  // back-nappi näyttää pääelementin ja piilottaa childit

  constructor() {}

  ngOnInit(): void {}
}
