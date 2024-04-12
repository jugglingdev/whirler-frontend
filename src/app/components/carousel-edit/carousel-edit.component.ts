import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlideService } from 'src/app/services/slide.service';
import { Carousel } from 'src/app/models/carousel';
import { CarouselService } from 'src/app/services/carousel.service';
import { QuillContentService } from 'src/app/services/quill-content.service';
import { Slide } from 'src/app/models/slide';
import { QuillContent } from 'src/app/models/quill-content';

@Component({
  selector: 'app-carousel-edit',
  templateUrl: './carousel-edit.component.html',
  styleUrls: ['./carousel-edit.component.scss']
})
export class CarouselEditComponent implements OnInit {
  carouselId: number;
  currentCarousel: Carousel;
  currentSlide: Slide;
  currentQuillContent: QuillContent;
  mode: string = 'edit';

  constructor (
    private route: ActivatedRoute,
    private carouselService: CarouselService,
    private slideService: SlideService,
    private quillContentService: QuillContentService
  ) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.carouselId = params['id'];
      });

      this.carouselService.getCarouselById(this.carouselId).subscribe((carousel) => {
        this.currentCarousel = carousel;
      })
  }

  onSave() {
    this.quillContentService.updateQuillContent(this.currentQuillContent);
  }

  onAddSlide() {
    this.currentSlide = new Slide({});
    this.slideService.createSlide(this.carouselId, this.currentSlide);
  }

  onSwitchMode() {
    this.onSave();
    this.mode = 'presentation';
  }
}
