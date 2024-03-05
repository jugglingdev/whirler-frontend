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
