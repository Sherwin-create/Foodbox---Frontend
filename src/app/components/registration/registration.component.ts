import { RegistrationService } from './../../services/registration.service';
import { Component, OnInit } from '@angular/core';

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
        window.location.href = '/login';
      },
      (error) => {
        console.log('please try with some other username');
      }
    );
  }
}
