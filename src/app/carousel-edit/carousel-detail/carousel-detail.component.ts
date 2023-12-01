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
  mode: string = 'presentation';
  slideContent: string;

  constructor(private quillEditorService: QuillEditorService) {}

  onActivateEditor(): void {
    this.mode = 'editContent';
  }

  @HostListener('document:keydown.escape', ['$event'])
  deactivateEditor(event: KeyboardEvent) {
    if (this.mode !== 'presentation') {
      event.preventDefault();
      const delta: Delta = this.quillEditorComponent.getQuillDelta();
      this.mode = 'presentation';
      this.slideContent = this.quillEditorService.updateSlideContent(delta);
    }
  }

}
