import { Component, Input } from '@angular/core';
import { Carousel } from './carousel.model';
import { Slide } from './slide/slide.model';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() carousel: Carousel;
  @Input() slide: Slide;

  constructor(private carouselService: CarouselService) {}

  
}
