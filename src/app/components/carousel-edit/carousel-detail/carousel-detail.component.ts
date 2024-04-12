import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { QuillEditorService } from 'src/app/services/quill-editor.service';
import { QuillContent } from 'src/app/models/quill-content';
import { CarouselService } from 'src/app/services/carousel.service';
import { Slide } from 'src/app/models/slide';
import { SlideService } from 'src/app/services/slide.service';

@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.scss']
})
export class CarouselDetailComponent implements OnInit {
  @Input('carouselId') carouselId: number;
  slides: Slide[];
  currentSlide: Slide;
  currentSlideIndex: number;

  @ViewChild(QuillEditorComponent) quillEditorComponent: QuillEditorComponent;
  mode: string = 'presentation';
  slideContent: string;

  constructor(private carouselService: CarouselService, private slideService: SlideService, private quillEditorService: QuillEditorService) {}

  ngOnInit(): void {
    this.slideService.getSlides(this.carouselId).subscribe((slides) => {
      this.slides = slides;
      this.currentSlide = slides[0];
      this.currentSlideIndex = 0;
    })
  }

  onActivateEditor(): void {
    this.mode = 'editContent';
  }

  // @HostListener('document:keydown.escape', ['$event'])
  // deactivateEditor(event: KeyboardEvent) {
  //   if (this.mode !== 'presentation') {
  //     event.preventDefault();
  //     this.mode = 'presentation';
  //     const quillContent: QuillContent = this.quillEditorService.getCurrentQuillContent(this.currentSlide);
  //     this.slideContent = this.quillEditorService.updateSlideContent(quillContent).html;
  //   }
  // }

  onPreviousSlide() {
    let newSlideIndex = this.currentSlideIndex - 1;
    this.currentSlide = this.slides[newSlideIndex];
  }

  onNextSlide() {
    let newSlideIndex = this.currentSlideIndex + 1;
    this.currentSlide = this.slides[newSlideIndex];
  }

}
