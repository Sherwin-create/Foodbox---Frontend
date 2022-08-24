import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  url = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  loggingIn(credentials: any) {
    return this.http.post(`${this.url}/adminLogin`, credentials); 
  }
}
