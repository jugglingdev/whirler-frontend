import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { QuillEditorService } from "../carousel-detail/quill-editor/quill-editor.service";
import { Slide } from "./slide.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class SlideService {
  constructor(private http: HttpClient, private quillService: QuillEditorService) {}

  getSlides(id: string): Observable<Slide[]> {
    return this.http
      .get<Slide[]>(
        `https://whirler-6dbae-default-rtdb.firebaseio.com/slides/${id}.json`
      )
  }

  getSlide(carouselId: string, slideId: string): Observable<Slide> {
    return this.http
      .get<Slide>(
        `https://whirler-6dbae-default-rtdb.firebaseio.com/slides/${carouselId}/${slideId}.json`
      )
  }

  addSlide(newSlide: Slide): Observable<{name: string}> {
    return this.http
      .post<{name: string}>(
        'https://whirler-6dbae-default-rtdb.firebaseio.com/slides.json',
        newSlide
      );
  }

  updateSlide(updatedSlide: Slide): Observable<{name: string}> {
    return this.http
      .put<{name: string}>(
        'https://whirler-6dbae-default-rtdb.firebaseio.com/slides.json',
        updatedSlide
      );
  }

  removeSlide(id: number): void {
  }

}
