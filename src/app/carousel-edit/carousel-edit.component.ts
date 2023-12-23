import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselService } from '../shared/carousel.service';
import { Carousel } from '../shared/carousel.model';
import { SlideService } from './slide/slide.service';

@Component({
  selector: 'app-carousel-edit',
  templateUrl: './carousel-edit.component.html',
  styleUrls: ['./carousel-edit.component.scss']
})
export class CarouselEditComponent implements OnInit {
  carouselId: string;
  carousel: Carousel;

  constructor (private route: ActivatedRoute, private carouselService: CarouselService, private slideService: SlideService) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.carouselId = params['id'];
      });

      this.carouselService.getCarousel(this.carouselId).subscribe((carousel) => {
        this.carousel = carousel;
      })
  }

  onSave() {
    // update QuillContent and Slides array
    // send updated Slides array to Firebase
    // if in presentation mode, stay in presentation mode; if in editor mode, stay in editor mode
  }

  onAddSlide() {
    // Add empty slide to Slides array
    // Change Carousel Detail slide to new empty slide
    // Open editor on new empty slide
  }
}
