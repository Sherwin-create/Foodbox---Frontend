import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  url = 'http://localhost:8080';

  constructor(private http : HttpClient) { }

  public addFood(food: any) {
    return this.http.post(`${this.url}/food/addFood`, food);
  }

  public fetchFood() {
    return this.http.get(`${this.url}/food/getAllFood`);
  }

  public deleteFood(fId : any) {
    return this.http.delete(`${this.url}/food/deleteFood/${fId}`, )
  }

  public getFood(fId: any) {
    return this.http.get(`${this.url}/food/getFood/${fId}`)
  }

  public updateFood(food: any) {
    return this.http.put(`${this.url}/food/updateFood`, food)
  }
}
