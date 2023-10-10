import { Component, Input } from '@angular/core';
import { Carousel } from './carousel.model';
import { Slide } from './slide/slide.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {

  @Input() slide: Slide;

  carousel: Carousel;

  constructor() {
    this.carousel = new Carousel(
      'Breakout Post',
      'In this post, I tell my story - what got me into coding',
      ['softwaredevelopment', 'careerswitcher'],
      'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
      [this.slide]
    );
  }
}
