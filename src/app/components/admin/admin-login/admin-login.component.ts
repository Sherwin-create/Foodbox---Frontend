import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  credentials = {
    adminName: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("admin form submitted");
    this.adminService.loggingIn(this.credentials).subscribe(
      (response: any)=> {
        window.location.href = "/admin";
      },
      (error)=>  {
        Swal.fire({
          title: 'error!',
          text: 'Invalid Credentials',
          icon: 'error',
          confirmButtonText: 'Ok',
        })
      }
    )
  }
}
