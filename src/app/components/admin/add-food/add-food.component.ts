import { FoodService } from './../../../services/food.service';
import { CusinesService } from './../../../services/cusines.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
})
export class AddFoodComponent implements OnInit {
  constructor(private cusinesService: CusinesService, private foodService: FoodService) {}

  food = {
    fName: '',
    fDescription: '',
    price: '',
    img: '',
    enabled: true,
    cusines: null
  };

  cusines=[
    {
      cId: '',
      cName: ''
    },
  ]

  ngOnInit(): void {
    this.cusinesService.getCusines().subscribe(
      (data: any)=> {
         this.cusines=data;
         console.log(data)
      },
      (error) => {
        Swal.fire({
          title: 'error!',
            text: 'Someting is not write😟, Please contact the admin',
            icon: 'error',
            confirmButtonText: 'Ok',
        })
        console.log(error);
      }
    )
  }

  formSubmit() {
    this.foodService.addFood(this.food).subscribe(
      (response:any) =>{
        Swal.fire( {
          title: 'Success!',
          text: 'food added successfully',
          icon: 'info',
          confirmButtonText: 'Cool',
          timer: 10000,
        }
        ).then(function() {
          window.location.href = "/admin/viewFood";
        });
      }
    )
  }
}
