import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Slide } from "./slide.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class SlideService {

  private baseUrl = 'https://whirler-6dbae-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  getSlide(carouselId: string, slideId: string): Observable<Slide> {
    return this.http
      .get<Slide>(
        `${this.baseUrl}/${carouselId}/${slideId}.json`
      )
  }
  
  getAllSlides(id: string): Observable<Slide[]> {
    return this.http
      .get<Slide[]>(
        `${this.baseUrl}/${id}.json`
      )
  }

  addSlide(newSlide: Slide): Observable<{name: string}> {
    return this.http
      .post<{name: string}>(
        `${this.baseUrl}/slides.json`,
        newSlide
      );
  }

  updateSlide(updatedSlide: Slide): Observable<{name: string}> {
    return this.http
      .put<{name: string}>(
        `${this.baseUrl}/slides.json`,
        updatedSlide
      );
  }

  removeSlide(id: number): Observable<any> {
    return this.http
      .delete(
        `${this.baseUrl}/slides/${id}.json`);
  }

}
