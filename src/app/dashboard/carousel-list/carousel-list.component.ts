import { Component, OnInit } from '@angular/core';
import { CarouselListService } from 'src/app/dashboard/carousel-list/carousel-list.service';
import { Carousel } from 'src/app/shared/carousel.model';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {

  carousels: Carousel[];

  constructor (private carouselListService: CarouselListService) {}

  ngOnInit(): void {
    this.carousels = this.carouselListService.getCarousels();
    this.carouselListService.carouselsUpdated.subscribe((carousels) => this.carousels = carousels);
  }

  removeCarousel(id: number) {
    this.carouselListService.removeCarousel(id);
  }
}
