import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Carousel } from '../models/carousel';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
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

  constructor(private http: HttpClient) { }

  getCarousels(): Observable<Carousel[]> {
    return this.http.get<Carousel[]>(`${environment.apiUrl}/carousels`);
  }

  getCarouselById(id: number): Observable<Carousel> {
    return this.http.get<Carousel>(`${environment.apiUrl}/carousels/${id}`);
  }

  createCarousel(carousel: Carousel): Observable<Carousel> {
    return this.http
      .post<Carousel>(`${environment.apiUrl}/carousels`, carousel)
      .pipe(
        tap(() => this.carouselsUpdated.emit(),
        (error) => {
          console.error('Error creating carousel: ', error);
        })
      );
  }

  updateCarousel(carousel: Carousel): Observable<Carousel> {
    return this.http
      .put<Carousel>(`${environment.apiUrl}/carousels/${carousel.id}`, carousel)
      .pipe(
        tap(() => this.carouselsUpdated.emit(),
        (error) => {
          console.error('Error updating carousel: ', error);
        })
      );
  }

  deleteCarousel(id: number): Observable<Carousel> {
    return this.http
      .delete<Carousel>(`${environment.apiUrl}/carousels/${id}`)
      .pipe(
        tap(() => this.carouselsUpdated.emit(),
        (error) => {
          console.error('Error deleting carousel: ', error);
        })
      );
  }
}
