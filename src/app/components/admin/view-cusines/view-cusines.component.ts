import { CusinesService } from 'src/app/services/cusines.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-view-cusines',
  templateUrl: './view-cusines.component.html',
  styleUrls: ['./view-cusines.component.css'],
})
export class ViewCusinesComponent implements OnInit {
  constructor(private cusineService: CusinesService) {}

  cusines: any = [];
  ngOnInit(): void {
    this.cusineService.getCusines().subscribe(
      (response: any) => {
        this.cusines = response;
        console.log(this.cusines);
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

  deleteCusine(cId: any) {
    console.log(cId); 
    this.cusineService.deleteCusine(cId).subscribe((response) => {
      console.log(cId); 
      Swal.fire({
        title: 'success',
        text: 'selected cusine succesfully deleted',
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
