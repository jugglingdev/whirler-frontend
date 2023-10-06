import { Component } from '@angular/core';
import { Carousel } from '../../shared/carousel/carousel.model';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent {


  carousels: Carousel[] = [
    new Carousel(
      'Breakout Post',
      'In this post, I tell my story - what got me into coding',
      ['softwaredevelopment', 'careerswitcher'],
      'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q='
    ),
    new Carousel(
      'Switching Careers',
      'My experience switching careers from teaching to software development',
      ['softwaredevelopment', 'careerswitcher'],
      'https://www.shutterstock.com/shutterstock/photos/2183363749/display_1500/stock-photo-happy-elementary-school-teacher-giving-high-five-to-her-student-during-class-in-the-classroom-2183363749.jpg'
    )
  ]
}
