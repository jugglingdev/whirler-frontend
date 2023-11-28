import { Component, HostListener, ViewChild } from '@angular/core';
import DeltaStatic from 'quill-delta';
import Delta from 'quill-delta';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { QuillEditorService } from './quill-editor/quill-editor.service';

@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.scss']
})
export class CarouselDetailComponent {
  @ViewChild(QuillEditorComponent) quillEditorComponent: QuillEditorComponent;
  editTextMode = false;
  slideContent: string;

  constructor(private quillEditorService: QuillEditorService) {}

  onActivateEditor(event: Event): void {
    event.stopPropagation();
    this.editTextMode = true;
  }

  handleClick(event: MouseEvent): void {
    if (!this.editTextMode) {
      
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  deactivateEditor(event: KeyboardEvent) {
    if (this.editTextMode) {
      event.preventDefault();
      const delta: Delta = this.quillEditorComponent.getQuillDelta();
      this.editTextMode = false;
      this.slideContent = this.quillEditorService.updateSlideContent(delta);
    }
  }



}
