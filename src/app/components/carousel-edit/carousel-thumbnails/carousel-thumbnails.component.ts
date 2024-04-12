import { Component, Input, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slide';
import { SlideService } from 'src/app/services/slide.service';

@Component({
  selector: 'app-carousel-thumbnails',
  templateUrl: './carousel-thumbnails.component.html',
  styleUrls: ['./carousel-thumbnails.component.scss']
})
export class CarouselThumbnailsComponent implements OnInit {
  @Input('carouselId') carouselId: number;
  slides: Slide[];

  constructor(private slideService: SlideService) {}

  ngOnInit(): void {
    this.slideService.getSlides(this.carouselId).subscribe((slides) => {
      this.slides = slides;
    })
  }

  onDeleteSlide(slide) {
    this.slideService.deleteSlide(slide);
  }
}
