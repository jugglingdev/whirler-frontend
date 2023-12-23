import { Injectable } from "@angular/core";
import Quill from 'quill';
import Delta from 'quill-delta';
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { Subject } from "rxjs";
import { QuillContent } from "./quill-content.model";

@Injectable({providedIn: 'root'})
export class QuillEditorService {
  quillContentChanged = new Subject<QuillContent[]>();

  private quill: Quill;
  private quillContent: QuillContent[] = [];

  // Quill

  setQuillInstance(quill: Quill): void {
    this.quill = quill;
  }

  getQuillInstance(): Quill {
    return this.quill;
  }

  // Quill Content

  // getQuillContentDelta(): Delta {
  //   // return this.quillContent.getContents();
  // }

  setQuillContentDelta(delta: Delta): void {
    // this.quill.setContents(delta);
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

  // convertHtmlToDelta(html: string): Delta {
  //   // const delta = this.quill.clipboard.convert({ html });
  //   // return delta;
  // }

}
