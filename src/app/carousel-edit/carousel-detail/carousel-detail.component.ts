import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.scss']
})
export class CarouselDetailComponent {
  slideContent: string;
  editTextMode = true;
  editImageMode = true;

  // textarea = document.querySelector('.ql-container');
  // container = document.querySelector('.ql-editor');
  // maxHeight = this.container.clientHeight;

  constructor() {
    this.slideContent = 'Initial slide content';
  }

  // textarea.addEventListener('input', function () {
  //   const scrollHeight = this.scrollHeight;
  //   if (scrollHeight > this.maxHeight) {
  //     this.value = this.value.substring(0, this.value.length - 1);
  //   }
  // });

}
