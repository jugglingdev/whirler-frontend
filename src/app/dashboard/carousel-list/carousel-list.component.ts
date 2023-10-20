import { Component, OnInit } from '@angular/core';
import { CarouselCard } from './carousel-card/carousel-card.model';
import { CarouselListService } from 'src/app/dashboard/carousel-list/carousel-list.service';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {

  carousels: CarouselCard[];

  constructor (private carouselListService: CarouselListService) {}

  ngOnInit(): void {
    this.carousels = this.carouselListService.getCarousels();
    this.carouselListService.carouselsUpdated.subscribe((carousels) => this.carousels = carousels);
  }

  removeCarousel(id: number) {
    this.carouselListService.removeCarousel(id);
  }
}
