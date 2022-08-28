import { FoodService } from './../../../services/food.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-food',
  templateUrl: './view-food.component.html',
  styleUrls: ['./view-food.component.css']
})
export class ViewFoodComponent implements OnInit {

  constructor(private foodService: FoodService) { }

  food: any =[];

  ngOnInit(): void {
    this.foodService.fetchFood().subscribe(
      (response: any) => {
        this.food = response;
        console.log(this.food);
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
    )
  }

  deleteFood(fId: any) {
    console.log(fId); 
    this.foodService.deleteFood(fId).subscribe((response) => {
      console.log(fId); 
      Swal.fire({
        title: 'success',
        text: 'selected food succesfully deleted',
        icon: 'success',
        confirmButtonText: 'ok',
      }

      ).then(function(){ 
        location.reload();
        }
      );
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

  }
}
