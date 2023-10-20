import { Component } from '@angular/core';
import { Slide } from './slide.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  slide: Slide;

  constructor() {
    this.slide = new Slide('Slide Title', 'Slide Thumbnail')
  }

}
