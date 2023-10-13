import { EventEmitter, Injectable, Output } from "@angular/core";
import { Carousel } from "./carousel/carousel.model";

@Injectable({providedIn: 'root'})
export class CarouselService {
  @Output('') carouselList = new EventEmitter<Carousel[]>();
  @Output('') carousel = new EventEmitter<Carousel>();


  carousels: Carousel[] = [
    new Carousel(
      'Breakout Post',
      'In this post, I tell my story - what got me into coding',
      ['softwaredevelopment', 'careerswitcher'],
      'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
      []
    ),
    new Carousel(
      'Dev Puns',
      'Jokes about software development',
      ['softwaredevelopment', 'jokes'],
      'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
      []
    ),
    new Carousel(
      'Breakout Post',
      'In this post, I tell my story - what got me into coding',
      ['softwaredevelopment', 'careerswitcher'],
      'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
      []
    ),
  ]

  getAllCarousels() {
    this.carousels.emit(this.carouselList);
  }

  getCarousel(carousel: Carousel) {
    this.carousels
  }

  addCarousel(carousel: Carousel) {
    this.carousels.push(carousel);
  }

  removeCarousel(carousel: Carousel) {
    this.carousels.splice(this.carousels.indexOf(carousel), 1);
  }

}
