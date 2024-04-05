import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Carousel } from 'src/app/models/carousel';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {

  carousels: Carousel[];
  @Output('openModal') openModal = new EventEmitter<Carousel>();

  constructor (private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.carouselService.getCarousels().subscribe({
      next: (carousels) => {
        this.carousels = carousels;
      },
      error: (error) => {
        console.error(error);
      }
    })

    this.carouselService.carouselsUpdated.subscribe(() => {
      this.refreshCarousels();
    })
  }

  onOpenModal(event, carousel: Carousel) {
    event.stopPropagation();
    this.openModal.emit(carousel);
  }

  removeCarousel(event, id: number) {
    event.stopPropagation();
    this.carouselService.deleteCarousel(id).subscribe(() => {});
  }

  private refreshCarousels() {
    this.carouselService.getCarousels().subscribe({
      next: (carousels) => {
        this.carousels = carousels;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
