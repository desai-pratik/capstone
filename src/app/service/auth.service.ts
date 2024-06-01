import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://freelance-capstone-backend.onrender.com/v1/';

  constructor(private http: HttpClient) {} 
  register(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'auth/register', user);
  }
  login(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'auth/register', user);
  }
}
