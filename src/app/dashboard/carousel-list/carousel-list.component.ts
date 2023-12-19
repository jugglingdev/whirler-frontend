import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Carousel } from 'src/app/shared/carousel.model';
import { CarouselService } from 'src/app/shared/carousel.service';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {

  carousels: Carousel[];
  @Output('openModal') openModal = new EventEmitter<Carousel>();

  constructor (private carouselService: CarouselService, private route: Router) {}

  ngOnInit(): void {
    this.carouselService.getAllCarousels()
      .subscribe((data) => {
        if (data && typeof data === 'object') {
          this.carousels = Object.values(data);
        } else {
          this.carousels = data;
        }
      });

    this.carouselService.carouselsUpdated.subscribe(() => {
      this.refreshCarousels();
    })
  }

  onOpenModal(event, carousel: Carousel) {
    event.stopPropagation();
    this.openModal.emit(carousel);
  }

  removeCarousel(event, id: string) {
    event.stopPropagation();
    event.preventDefault();
    this.carouselService.deleteCarousel(id).subscribe(() => {});
  }

  private refreshCarousels() {
    this.carouselService.getAllCarousels()
      .subscribe((data) => {
        if (data && typeof data === 'object') {
          this.carousels = Object.values(data);
        } else {
          this.carousels = data;
        }
      });
  }
}
