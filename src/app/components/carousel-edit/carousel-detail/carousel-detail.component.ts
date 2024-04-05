import { Component, HostListener, ViewChild } from '@angular/core';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { QuillEditorService } from 'src/app/services/quill-editor.service';
import { QuillContent } from 'src/app/models/quill-content';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.scss']
})
export class CarouselDetailComponent {
  @ViewChild(QuillEditorComponent) quillEditorComponent: QuillEditorComponent;
  mode: string = 'presentation';
  slideContent: string;

  constructor(private carouselService: CarouselService, private quillEditorService: QuillEditorService) {}

  onActivateEditor(): void {
    this.mode = 'editContent';
  }

  @HostListener('document:keydown.escape', ['$event'])
  deactivateEditor(event: KeyboardEvent) {
    if (this.mode !== 'presentation') {
      event.preventDefault();
      this.mode = 'presentation';
      const quillContent: QuillContent = this.quillEditorService.getCurrentQuillContent(slide);
      this.quillEditorService.updateSlideContent(quillContent);
    }
  }

}
