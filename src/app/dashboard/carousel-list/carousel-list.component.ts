import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/shared/carousel.model';
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
    this.carouselService.getAllCarousels()
      .subscribe((data) => {
        if (data && typeof data === 'object') {
          this.carousels = Object.values(data);
        } else {
          this.carousels = data;
        }
      });
  }

  removeCarousel(id: number) {
    this.carouselService.deleteCarousel(id).subscribe(() => {

    });
  }
}
