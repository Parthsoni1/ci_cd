import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  details: {
    email: string,
    contactNumber: string,
    birthDate: string
  }
  constructor() { }

  ngOnInit() {
  }

  checkDetail(e) {
    console.log('e ', e);
    
  }
}
