import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Carousel } from "./carousel.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class CarouselService {

  private carousel: Carousel;
  private baseUrl = 'https://whirler-6dbae-default-rtdb.firebaseio.com/';

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

  constructor(private http: HttpClient) {}

  getCarousel(carouselId: string): Observable<Carousel> {
    return this.http
      .get<Carousel>(
        `${this.baseUrl}/carousels/${carouselId}.json`
      );
  }

  getAllCarousels(): Observable<Carousel[]> {
    return this.http
      .get<Carousel[]>(
        `${this.baseUrl}/carousels.json`
      );
  }

  createCarousel(newCarousel: Carousel): Observable<any> {
    return this.http
      .post(
        `${this.baseUrl}/carousels.json`,
        newCarousel);
  }

  updateCarousel(updatedCarousel: Carousel): Observable<any> {
    return this.http
      .put(
        `${this.baseUrl}/carousels.json`,
        updatedCarousel);
  }

  deleteCarousel(carouselId: number): Observable<any> {
    return this.http
      .delete(
        `${this.baseUrl}/carousels/${carouselId}.json`
      );
  }

}
