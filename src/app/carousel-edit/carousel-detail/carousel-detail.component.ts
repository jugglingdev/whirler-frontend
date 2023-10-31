import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.scss']
})
export class CarouselDetailComponent implements OnInit, AfterViewInit {
  slideContent: string;
  @ViewChild('quillEditor') quillEditor: ElementRef;

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

  ngOnInit(): void {
      console.log(this.quillEditor);
  }

  ngAfterViewInit(): void {
    console.log(this.quillEditor);
  }

}
