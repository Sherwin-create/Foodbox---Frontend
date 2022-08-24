import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:8083';

  constructor(private http: HttpClient) {}

  loggingIn(credential: any) {
    return this.http.post(`${this.url}/login`, credential);
    
  }
}
