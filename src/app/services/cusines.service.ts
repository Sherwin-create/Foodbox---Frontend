import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CusinesService {
  url = 'http://localhost:8083';

  constructor(private http:HttpClient) { }

  public addCategory(cusines : any) {
    return this.http.post(`${this.url}/addCusine`, cusines)
  }

  public getCusines(){
    return this.http.get(`${this.url}/getCusines`)
  }

  public deleteCusine(cId: any) {
    return this.http.delete(`${this.url}/deleteCusine/${cId}`);
  }
}
