import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
    
  }
  
  onSubmit() {
    console.log("login form submitted");

    this.loginService.loggingIn(this.credentials).subscribe(
      (response: any) => {
        console.log("Login Successfull");
        window.location.href = "/login";
      },
      (error) => {  
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
