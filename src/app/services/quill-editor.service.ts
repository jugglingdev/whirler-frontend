import { Injectable } from "@angular/core";
import Quill from 'quill';
import Delta from 'quill-delta';
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { Subject } from "rxjs";
import { QuillContent } from "../models/quill-content";

@Injectable({providedIn: 'root'})
export class QuillEditorService {
  quillContentChanged = new Subject<QuillContent[]>();

  private quill: Quill;
  private quillDimensions: {
    width: number,
    height: number,
    x: number,
    y: number
    } = {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }

  private quillContents: QuillContent[] = [];

  // Quill

  setQuillInstance(quill: Quill): void {
    this.quill = quill;
  }

  getQuillInstance(): Quill {
    return this.quill;
  }

  // Delta

  getQuillDelta() {
    const delta = this.quill.getContents();
    return delta;
  }

  setQuillDelta(delta: Delta): void {
    this.quill.setContents(delta);
  }

  convertHtmlToDelta(html: string): Delta {
    const delta = this.quill.clipboard.convert({ html });
    return delta;
  }

  // QuillContent

  getCurrentQuillContent(): QuillContent {
    return {
      width: this.quillDimensions.width,
      height: this.quillDimensions.height,
      x: this.quillDimensions.x,
      y: this.quillDimensions.y,
      delta: this.getQuillDelta()
    };
  }

  setCurrentQuillContent(delta: Delta): QuillContent {
    return new QuillContent(
      this.quillDimensions.width,
      this.quillDimensions.height,
      this.quillDimensions.x,
      this.quillDimensions.y,
      delta,

    );
  }

  setCurrentQuillContentDimensions(width, height, x, y) {
    this.quillDimensions.width = width,
    this.quillDimensions.height = height,
    this.quillDimensions.x = x,
    this.quillDimensions.y = y
  }

  getAllQuillContent() {
    return this.quillContents.slice();
  }

  // Slides

  updateSlideContent(quillContent: QuillContent) {
    const delta = quillContent.delta;
    const slideContent: string = this.convertDeltaToHtml(delta);
    return { ...quillContent, html: slideContent };
  }

  convertDeltaToHtml(delta: Delta): string {
    const htmlContent: string = new QuillDeltaToHtmlConverter(delta.ops, {
      inlineStyles: true,
    }).convert();
    return htmlContent;
  }

}
