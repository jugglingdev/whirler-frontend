import { Component, Input, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slide';
import { SlideService } from 'src/app/services/slide.service';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-carousel-thumbnails',
  templateUrl: './carousel-thumbnails.component.html',
  styleUrls: ['./carousel-thumbnails.component.scss'],
  imports: [CdkDropList, CdkDrag]
})
export class CarouselThumbnailsComponent {
  @Input('slides') slides: Slide[];

  constructor(private slideService: SlideService) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.slides, event.previousIndex, event.currentIndex);
  }

  onDeleteSlide(slide) {
    this.slideService.deleteSlide(slide);
  }
}
