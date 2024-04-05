import { Component, Input, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';
import { QuillEditorService } from '../../../services/quill-editor.service';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SlideComponent implements AfterViewInit {
  slideId: number;
  slide: Slide;
  @Input() slideContent: string;

  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
    private quillEditorService: QuillEditorService) {
    // this.slide = new Slide('Slide Title', 'Slide Content', 'Slide Thumbnail');
  }

  ngAfterViewInit(): void {
    this.applyQuillStyles();
  }

  private applyQuillStyles(): void {
    const sanitizedContent = DOMPurify.sanitize(this.slideContent);
    this.el.nativeElement.querySelector('.slide-content').innerHTML = sanitizedContent;
  }



}

