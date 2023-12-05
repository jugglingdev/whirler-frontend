import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Carousel } from "./carousel.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class CarouselService {

  private carousel: Carousel;
  private baseUrl = 'https://whirler-6dbae-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  getCarousel(): Observable<Carousel> {
    return this.http
      .get<Carousel>(
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
