import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${environment.apiUrl}/tags`);
  }

  createTag(tag: Tag): Observable<Tag> {
    return this.http
      .post<Tag>(`${environment.apiUrl}/tags`, tag);
  }
}
