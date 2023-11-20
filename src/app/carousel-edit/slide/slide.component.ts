import { Component, Input, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';
import { Slide } from './slide.model';
import { DomSanitizer } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';
import Delta from 'quill-delta';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { QuillEditorService } from '../carousel-detail/quill-editor/quill-editor.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SlideComponent implements AfterViewInit {
  slide: Slide;
  @Input() slideContent: string;

  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
    private quillEditorService: QuillEditorService) {
    this.slide = new Slide('Slide Title', 'Slide Content', 'Slide Thumbnail');
  }

  ngAfterViewInit(): void {
    this.applyQuillStyles();
  }

  private applyQuillStyles(): void {
    const sanitizedContent = DOMPurify.sanitize(this.slideContent);
    this.el.nativeElement.querySelector('.slide-content').innerHTML = sanitizedContent;
  }



}

