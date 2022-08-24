import { RegistrationService } from './../../services/registration.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})



export class RegistrationComponent implements OnInit {
  
  credentials = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
  };

  
  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('form is submitted');

    this.registrationService.createAccount(this.credentials).subscribe(
      (response: any) => {
        console.log('success');
        Swal.fire({
          title: 'Success!',
          text: 'Registration successfull',
          icon: 'success',
          confirmButtonText: 'Cool',
          timer: 1000,

        }).then(function() {
          window.location.href = "/login";
      });
        // window.location.href = '/login';
      },
      (error) => {
        Swal.fire({
          title: 'error!',
          text: 'Something went wrong try it with other username',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1000
        })
      }
    );
  }
}
