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
  editContentMode = false;
  dragAndDropMode = false;
  slideContent: string;

  constructor(private quillEditorService: QuillEditorService) {}

  onActivateEditor(): void {
    const quillEditor = document.querySelector('.ql-container');

    if (this.dragAndDropMode) {
      quillEditor.classList.remove('.drag-and-drop-mode');
    }

    this.editContentMode = true;
    this.dragAndDropMode = false;
  }

  @HostListener('document:keydown.escape', ['$event'])
  deactivateEditor(event: KeyboardEvent) {
    if (this.editContentMode) {
      event.preventDefault();
      const delta: Delta = this.quillEditorComponent.getQuillDelta();
      this.editContentMode = false;
      this.dragAndDropMode = false;
      this.slideContent = this.quillEditorService.updateSlideContent(delta);

      const quillEditor = document.querySelector('.ql-container');
      quillEditor.classList.remove('.drag-and-drop-mode');
    }
  }

}
