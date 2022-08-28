import { FoodService } from './../../../services/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.css']
})
export class WelcomeComponentComponent implements OnInit {

  constructor(private foodService: FoodService,) { }
  public productList: any =[];
  ngOnInit(): void {
    this.foodService.fetchFood().subscribe(
      (response: any) => {
        this.productList = response;
      }
    );
  }

}
