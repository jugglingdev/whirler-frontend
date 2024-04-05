import { Component } from '@angular/core';
import { Carousel } from '../../models/carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showCreateCarouselModal = false;
  selectedCarousel: Carousel = null;

  onCreateCarousel() {
    this.showCreateCarouselModal = true;
    this.selectedCarousel = null;
  }

  onEditCarouselInfo(carousel: Carousel) {
    this.showCreateCarouselModal = true;
    this.selectedCarousel = carousel;
  }
}
