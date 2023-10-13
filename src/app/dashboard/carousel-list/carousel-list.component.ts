import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../shared/carousel/carousel.model';
import { CarouselService } from 'src/app/shared/carousel.service';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {

  carousels: Carousel[];

  constructor (private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.carousels = this.carouselService.getCarousels();
    this.carouselService.carouselsUpdated.subscribe((carousels) => this.carousels = carousels);
  }

  removeCarousel(id: number) {
    this.carouselService.removeCarousel(id);
  }
}
