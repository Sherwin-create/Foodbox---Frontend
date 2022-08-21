import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  url = 'http://localhost:8083';

  constructor(private http: HttpClient) {}

  createAccount(credential: any) {
    return this.http.post(`${this.url}/register`, credential)
  }
}
