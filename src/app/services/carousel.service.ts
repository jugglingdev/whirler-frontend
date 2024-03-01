import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carousel } from '../models/carousel';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

  getCarousels(): Observable<Carousel[]> {
    return this.http.get<Carousel[]>(`${environment.apiUrl}/carousels`);
  }

  getCarouselById(id: number): Observable<Carousel> {
    return this.http.get<Carousel>(`${environment.apiUrl}/carousels/${id}`);
  }

  createCarousel(carousel: Carousel): Observable<Carousel> {
    return this.http.post<Carousel>(`${environment.apiUrl}/carousels`, carousel);
  }

  updateCarousel(carousel: Carousel): Observable<Carousel> {
    return this.http.put<Carousel>(`${environment.apiUrl}/carousels/${carousel.id}`, carousel);
  }

  deleteCarousel(id: number): Observable<Carousel> {
    return this.http.delete<Carousel>(`${environment.apiUrl}/carousels/${id}`);
  }
}
