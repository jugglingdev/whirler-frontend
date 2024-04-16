import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlideService } from 'src/app/services/slide.service';
import { Carousel } from 'src/app/models/carousel';
import { CarouselService } from 'src/app/services/carousel.service';
import { QuillContentService } from 'src/app/services/quill-content.service';
import { Slide } from 'src/app/models/slide';
import { QuillContent } from 'src/app/models/quill-content';
import { QuillEditorComponent } from 'src/app/components/carousel-edit/quill-editor/quill-editor.component';

@Component({
  selector: 'app-carousel-edit',
  templateUrl: './carousel-edit.component.html',
  styleUrls: ['./carousel-edit.component.scss']
})
export class CarouselEditComponent implements OnInit {
  viewMode: string = 'default';

  carouselId: number;
  currentCarousel: Carousel;

  slides: Slide[];
  currentSlide: Slide;
  currentSlideIndex: number = 0;
  @ViewChild('slideDetail') slideDetail: ElementRef;

  currentQuillContent: QuillContent;
  // @ViewChild(QuillEditorComponent) quillEditorComponent: QuillEditorComponent;

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
      });

      this.slideService.getSlides(this.carouselId).subscribe({
        next: (slides) => {
          if (slides.length !== 0) {
            this.slides = slides;
            this.currentSlide = slides[0];
          } else {
            this.currentSlide = new Slide({});
          }
          this.fetchQuillContents();
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  onActivateEditor(): void {
    this.viewMode = 'edit';
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: Event): void {
    if (!this.slideDetail.nativeElement.contains(event.target)) {
      this.viewMode = 'default';
    }
  }

  onPreviousSlide() {
    let newSlideIndex = this.currentSlideIndex - 1;
    this.currentSlide = this.slides[newSlideIndex];
  }

  onNextSlide() {
    let newSlideIndex = this.currentSlideIndex + 1;
    this.currentSlide = this.slides[newSlideIndex];
  }

  onAddSlide() {
    this.currentSlide = new Slide({});
    this.slideService.createSlide(this.carouselId, this.currentSlide);
  }

  onAddContent() {
    this.currentQuillContent = new QuillContent({});
    this.quillContentService.createQuillContent(this.currentSlide.id, this.currentQuillContent);
  }

  onSave() {
    this.quillContentService.updateQuillContent(this.currentQuillContent);
    // this.currentSlide = slides[0];
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

  onSwitchMode() {
    this.onSave();
    this.viewMode = 'presentation';
  }

  private fetchQuillContents() {
    this.quillContentService.getQuillContents(this.currentSlide.id).subscribe({
      next: (quillContents) => {
        if (this.currentSlide && quillContents) {
          this.currentQuillContent = quillContents[0];
        } else {
          this.currentQuillContent = new QuillContent({});
        }
        console.log('Current Quill Content: ', this.currentQuillContent);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
