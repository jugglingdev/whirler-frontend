import { Component, HostListener, ViewChild } from '@angular/core';
import DeltaStatic from 'quill-delta';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';

@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.scss']
})
export class CarouselDetailComponent {
  @ViewChild(QuillEditorComponent) quillEditorComponent: QuillEditorComponent;
  editTextMode = false;
  slideContent: DeltaStatic | string;

  onActivateEditor() {
    this.editTextMode = true;
  }

  @HostListener('document:keydown.escape', ['$event'])
  deactivateEditor(event: KeyboardEvent) {
    if (this.editTextMode) {
      event.preventDefault();
      const delta: DeltaStatic = this.quillEditorComponent.getQuillDelta();
      this.editTextMode = false;
      this.updateSlideContent(delta);
    }
  }

  updateSlideContent(delta: DeltaStatic) {
    const htmlContent: string = this.convertDeltaToHtml(delta);
    this.slideContent = htmlContent;
    console.log(delta);
    console.log(htmlContent);
  }

  convertDeltaToHtml(delta: DeltaStatic): string {
    const converter = new QuillDeltaToHtmlConverter(delta.ops, {
      inlineStyles: true,
    });
    const htmlContent = converter.convert();
    return htmlContent;
  }

}
