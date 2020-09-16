import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { College } from './college';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
 
private baseApiUrl = 'http://localhost:8080/api/universities';

  constructor(private http: HttpClient) { }

  create(universityId: Number, college: Object): Observable<Object> {
    const url = `${this.baseApiUrl}/${universityId}/colleges`;
    return this.http.post(url, college);
  }

  deleteCollege(universityId: Number, id: number): Observable<Object> {
    const url = `${this.baseApiUrl}/${universityId}/colleges/${id}`;
    return this.http.delete(url);
  }

  retrieveAll(universityId: Number): Observable<any> {
    const url = `${this.baseApiUrl}/${universityId}/colleges`;
    return this.http.get(url);
  }

  getCollegeDetail(universityId: Number, id: Number): Observable<any> {
    const url = `${this.baseApiUrl}/${universityId}/colleges/${id}`;
    return this.http.get(url);
  }

  updateCollege(universityId: Number, id: Number, college: College): Observable<any>{
    const url = `${this.baseApiUrl}/${universityId}/colleges/${id}`;
    return this.http.put(url, college);
  }
}
