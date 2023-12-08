import { EventEmitter, Injectable } from "@angular/core";
import { Carousel } from "src/app/shared/carousel.model";

@Injectable({providedIn: 'root'})
export class CarouselListService {
  carouselSelected = new EventEmitter<Carousel>();
  carouselsUpdated = new EventEmitter<Carousel[]>();

  private carousels: Carousel[] = [
    new Carousel(
      'Breakout Post',
      'In this post, I tell my story - what got me into coding',
      ['softwaredevelopment', 'careerswitcher'],
      'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q='
    ),
    new Carousel(
      'Dev Puns',
      'Jokes about software development',
      ['softwaredevelopment', 'jokes'],
      'https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGF1Z2hpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    ),
    new Carousel(
      'What a Codefied World',
      'A parody of "What a Wonderful World" for software developers',
      ['softwaredevelopment', 'music'],
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjM-Ei5zpMh9ikJZPZrArGWLSit_aSYDKxKxYEZpE62U8YklAebLX53-6fW0wBmqO6pZYI&s'
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
