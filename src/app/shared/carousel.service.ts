import { EventEmitter, Injectable } from "@angular/core";
import { Carousel } from "./carousel/carousel.model";

@Injectable({providedIn: 'root'})
export class CarouselService {
  carouselSelected = new EventEmitter<Carousel>();
  carouselsUpdated = new EventEmitter<Carousel[]>();

  private carousels: Carousel[] = [
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

  getCarousels() {
    return [...this.carousels];
  }

  selectCarousel(carousel: Carousel) {
    this.carouselSelected.emit(carousel);
  }

  saveCarousel(carousel: Carousel) {
    this.carousels.push(carousel);
    this.carouselsUpdated.emit(this.getCarousels());
  }

  removeCarousel(id: number) {
    this.carousels.splice(id, 1);
    this.carouselsUpdated.emit(this.getCarousels());
  }

}
