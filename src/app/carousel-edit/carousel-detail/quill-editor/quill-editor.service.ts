import { Injectable } from "@angular/core";
import Quill from 'quill';
import Delta from 'quill-delta';
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class QuillEditorService {
  quillContentChanged = new Subject<Quill[]>();

  quill: Quill;

  private quillContent: Quill[] = [];

  getQuillDelta(): Delta {
    return this.quill.getContents();
  }

  setQuillDelta(delta: Delta): void {
    this.quill.setContents(delta);
  }

  getQuillContent() {
    return this.quillContent.slice();
  }

  updateSlideContent(delta: Delta) {
    const slideContent: string = this.convertDeltaToHtml(delta);
    return slideContent;
  }

  convertDeltaToHtml(delta: Delta): string {
    const htmlContent: string = new QuillDeltaToHtmlConverter(delta.ops, {
      inlineStyles: true,
    }).convert();
    return htmlContent;
  }

  convertHtmlToDelta(html: string): Delta {
    const delta = this.quill.clipboard.convert({ html });
    return delta;
  }

}
