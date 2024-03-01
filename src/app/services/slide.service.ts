import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slide } from '../models/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor(private http: HttpClient) { }

  getSlides(carouselId: number): Observable<Slide[]> {
    return this.http.get<Slide[]>(`${environment.apiUrl}/carousels/${carouselId}/slides`);
  }

  getSlideById(id: number): Observable<Slide> {
    return this.http.get<Slide>(`${environment.apiUrl}/slides/${id}`);
  }

  createSlide(carouselId: number, slide: Slide): Observable<Slide> {
    return this.http.post<Slide>(`${environment.apiUrl}/carousels/${carouselId}/slides`, slide);
  }

  updateSlide(slide: Slide): Observable<Slide> {
    return this.http.put<Slide>(`${environment.apiUrl}/slides/${slide.id}`, slide);
  }

  deleteSlide(id: number): Observable<Slide> {
    return this.http.delete<Slide>(`${environment.apiUrl}/slides/${id}`);
  }
}
