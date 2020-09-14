import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from './university';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {





  private baseApiUrl = 'http://localhost:8080/universities';

  constructor(private http: HttpClient) { }



  create(university: Object): Observable<Object> {
    const url = `${this.baseApiUrl}`;
    return this.http.post(url, university);
  }

  retrieveAll(): Observable<any> {
    const url = `${this.baseApiUrl}`;
    return this.http.get(url);
  }

  updateUniversity(id: Number, university: University): Observable<any> {
    const url = `${this.baseApiUrl}/${id}`;
    return this.http.put(url, university);
  }


  deleteUniversity(id: number): Observable<Object> {
    const url = `${this.baseApiUrl}/${id}`;
    return this.http.delete(url);
  }

  getUniversityDetail(id: Number): Observable<any> {
    const url = `${this.baseApiUrl}/${id}`;
    return this.http.get(url);
  }
}
