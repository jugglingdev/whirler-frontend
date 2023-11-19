import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.scss']
})
export class CarouselDetailComponent {
  slideContent: string;
  editTextMode = false;

  constructor() {
    this.slideContent = '';
  }

  onActivateEditor() {
    this.editTextMode = true;
  }

  @HostListener('document:keydown.escape')
  deactivateEditor() {
    this.editTextMode = false;
  }

}
