import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.scss']
})
export class CarouselDetailComponent {
  slideContent: string;

  constructor() {
    this.slideContent = 'Initial slide content';
  }

  

}
