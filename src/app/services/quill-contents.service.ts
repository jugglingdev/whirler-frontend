import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuillContent } from '../models/quill-content';

@Injectable({
  providedIn: 'root'
})
export class QuillContentsService {

  constructor(private http: HttpClient) { }

  getQuillContents(): Observable<QuillContent[]> {
    return this.http.get<QuillContent[]>(`${environment.apiUrl}/quill-contents`);
  }

  getQuillContentsById(id: number): Observable<QuillContent> {
    return this.http.get<QuillContent>(`${environment.apiUrl}/quill-contents/${id}`);
  }

  createQuillContent(quillContent: QuillContent): Observable<QuillContent> {
    return this.http.post<QuillContent>(`${environment.apiUrl}/quill-contents`, quillContent);
  }

  updateQuillContent(quillContent: QuillContent): Observable<QuillContent> {
    return this.http.put<QuillContent>(`${environment.apiUrl}/quill-contents/${quillContent.id}`, quillContent);
  }

  deleteQuillContent(id: number): Observable<QuillContent> {
    return this.http.delete<QuillContent>(`${environment.apiUrl}/quill-contents/${id}`);
  }
}
