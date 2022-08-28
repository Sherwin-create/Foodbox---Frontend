import { CartService } from './../../../services/cart.service';
import { FoodService } from './../../../services/food.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-food-user',
  templateUrl: './view-food-user.component.html',
  styleUrls: ['./view-food-user.component.css'],
})
export class ViewFoodUserComponent implements OnInit {
  constructor(private foodService: FoodService, private cart: CartService) {}

  searchKey: string = '';
  public productList: any = [];
  cartFood: any = [];
  ngOnInit(): void {
    this.foodService.fetchFood().subscribe(
      (response: any) => {
        this.productList = response;
        console.log(this.productList);

        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
      },
      (error) => {
        console.log(error);
        Swal.fire({
          title: 'error!',
          text: 'Something went wrong, error in loading data',
          icon: 'error',
          confirmButtonText: 'ok',
          timer: 5000,
        });
      }
    );

    this.cart.search.subscribe(val => {
      this.searchKey = val;
    })
  }

  addToCart(item: any) {
    //using localStorage
    // this.cartFood.push(item);
    // console.log(this.cartFood);

    this.cart.addtoCart(item);
  }

 
}
