import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Carousel } from "./carousel.model";

@Injectable({providedIn: 'root'})
export class CarouselService {

  private carousel: Carousel;

  constructor(private http: HttpClient) {}

  getCarousel() {
    return this.http
      .get<Carousel>(
        'https://whirler-6dbae-default-rtdb.firebaseio.com/carousels.json'
      )
      .subscribe(response => {
        this.carousel = response;
        console.log(response);
      })
  }

  createCarousel(newCarousel: Carousel) {
    this.carousel = newCarousel;
    return this.http
      .post(
        'https://whirler-6dbae-default-rtdb.firebaseio.com/carousels.json',
        this.carousel)
      .subscribe(response => {
        console.log(response);
      });
  }

  updateCarousel(updatedCarousel: Carousel) {
    this.carousel = updatedCarousel;
    return this.http
      .put(
        'https://whirler-6dbae-default-rtdb.firebaseio.com/carousels.json',
        updatedCarousel)
      .subscribe(response => {
        console.log(response);
      });
  }

  deleteCarousel(carouselId: number) {
    return this.http
      .delete(
        `https://whirler-6dbae-default-rtdb.firebaseio.com/carousels/${carouselId}.json`)
      .subscribe(response => {
        console.log(response);
      });
  }

}
