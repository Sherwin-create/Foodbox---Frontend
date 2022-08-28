import { CusinesService } from './../../../services/cusines.service';
import { FoodService } from './../../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private foodService: FoodService, private cusinesService: CusinesService) { }

   fId=null;
   foodItem= {
    fId: '',
    fName: '',
    fDescription: '',
    cusines: '',
    
    price:'',
    img: '',
    enabled:''
   };

  cusines=[
    {
      cId: '',
      cName: ''
    },
  ]

  ngOnInit(): void {
    
   this.fId = this._route.snapshot.params['fId'];
//   alert(this.fId);
    this.foodService.getFood(this.fId).subscribe (
      (data: any)=> {
        this.foodItem= data;  
        console.log(this.foodItem);
      },
      (error) => {
        console.log(error);
      }
      );


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
    this.foodService.updateFood(this.foodItem).subscribe(
      (data: any)=> {
        Swal.fire( {
          title: 'Success!',
          text: 'food added successfully',
          icon: 'info',
          confirmButtonText: 'Cool',
          timer: 10000,
        }).then(function() {
          window.location.href = "/admin/viewFood";
        });
      }
    )
  }
}
