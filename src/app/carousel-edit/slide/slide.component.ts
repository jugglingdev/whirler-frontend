import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Slide } from './slide.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SlideComponent {
  slide: Slide;
  @Input() slideContent: string;

  constructor(private sanitizer: DomSanitizer) {
    this.slide = new Slide('Slide Title', 'Slide Content', 'Slide Thumbnail')
  }

  getSafeHtml(): SafeHtml {
    // Validate and sanitize user-generated content!!
    return this.sanitizer.bypassSecurityTrustHtml(this.slideContent);
  }

}
