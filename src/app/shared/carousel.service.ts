import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Carousel } from "./carousel.model";
import { Observable, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class CarouselService {
  // emit() {
  //   throw new Error('Method not implemented.');
  // }

  private baseUrl = 'https://whirler-6dbae-default-rtdb.firebaseio.com/';

  carouselsUpdated = new EventEmitter<Carousel[]>();

  // private carousels: Carousel[] = [
  //   new Carousel(
  //     'Breakout Post',
  //     'In this post, I tell my story - what got me into coding',
  //     ['softwaredevelopment', 'careerswitcher'],
  //     'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q='
  //   ),
  //   new Carousel(
  //     'Dev Puns',
  //     'Jokes about software development',
  //     ['softwaredevelopment', 'jokes'],
  //     'https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGF1Z2hpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  //   ),
  //   new Carousel(
  //     'What a Codefied World',
  //     'A parody of "What a Wonderful World" for software developers',
  //     ['softwaredevelopment', 'music'],
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjM-Ei5zpMh9ikJZPZrArGWLSit_aSYDKxKxYEZpE62U8YklAebLX53-6fW0wBmqO6pZYI&s'
  //   ),
  // ]

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
        newCarousel)
      .pipe(
        tap((responseData: { name: string }) => {
          newCarousel.id = responseData.name;
          this.updateCarousel(responseData.name, newCarousel).subscribe(() => {
            this.carouselsUpdated.emit();
          });
        },
        (error) => {
          console.error('Error creating carousel: ', error);
        })
      );
  }

  updateCarousel(carouselId: string, updatedCarousel: Carousel): Observable<any> {
    return this.http
      .put(
        `${this.baseUrl}/carousels/${carouselId}.json`,
        updatedCarousel)
      .pipe(
        tap(() => {
          this.carouselsUpdated.emit();
        },
        (error) => {
          console.error('Error updating carousel: ', error);
        })
      );
  }

  deleteCarousel(carouselId: string): Observable<any> {
    return this.http
      .delete(
        `${this.baseUrl}/carousels/${carouselId}.json`
      )
      .pipe(
        tap(() => this.carouselsUpdated.emit(),
        (error) => {
          console.error('Error deleting carousel: ', error);
        })
      );
  }

}
