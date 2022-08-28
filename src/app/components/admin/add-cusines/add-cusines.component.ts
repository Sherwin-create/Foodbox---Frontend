import { Component, OnInit } from '@angular/core';
import { CusinesService } from 'src/app/services/cusines.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-add-cusines',
  templateUrl: './add-cusines.component.html',
  styleUrls: ['./add-cusines.component.css']
})
export class AddCusinesComponent implements OnInit {

  constructor(private cusineService: CusinesService
    ) { }

  cusines={cName:'',
  description:''};

  
  ngOnInit(): void {
  }
 

  formSubmit() {
    if(this.cusines.cName.trim() =='' || this.cusines.cName==null) {
      Swal.fire({
        title: 'error!',
          text: 'Name required',
          icon: 'error',
          confirmButtonText: 'Ok',
      })
    }

    console.log(this.cusines.cName);
  
    this.cusineService.addCategory(this.cusines).subscribe(
      (response:any) =>{
        Swal.fire( {
          title: 'Success!',
          text: 'cusines added successfull',
          icon: 'info',
          confirmButtonText: 'Cool',
          timer: 10000,
        }
        ).then(function() {
          window.location.href = "/admin/viewCusines";
        });
      }
    )
  }


}
