import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuillContent } from '../models/quill-content';

@Injectable({
  providedIn: 'root'
})
export class QuillContentService {

  constructor(private http: HttpClient) { }

  getQuillContents(slideId: number): Observable<QuillContent[]> {
    return this.http.get<QuillContent[]>(`${environment.apiUrl}/sildes/${slideId}/quill_contents`);
  }

  getQuillContentById(id: number): Observable<QuillContent> {
    return this.http.get<QuillContent>(`${environment.apiUrl}/quill_contents/${id}`);
  }

  createQuillContent(slideId: number, quillContent: QuillContent): Observable<QuillContent> {
    return this.http.post<QuillContent>(`${environment.apiUrl}/slides/${slideId}/quill-contents`, quillContent);
  }

  updateQuillContent(quillContent: QuillContent): Observable<QuillContent> {
    return this.http.put<QuillContent>(`${environment.apiUrl}/quill_contents/${quillContent.id}`, quillContent);
  }

  deleteQuillContent(id: number): Observable<QuillContent> {
    return this.http.delete<QuillContent>(`${environment.apiUrl}/quill_contents/${id}`);
  }
}
