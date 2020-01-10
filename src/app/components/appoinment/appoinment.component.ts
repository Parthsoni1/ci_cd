import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared/staff.service';
import { Data } from 'src/app/model/data.model';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {

  allData: Data[];
  constructor(public staffService: StaffService) { }

  ngOnInit() {
  }
 

  createAndUpdte(currentUser: Data) {
    console.log(currentUser.id);
    if (currentUser.id != null) {
      this.updateUser(currentUser);
      this.clearEmployee();
    } else {
      this.createUser(currentUser);
      this.clearEmployee();
    }
  }

  createUser(emp: Data) {
    this.staffService.createUser(emp)
    .subscribe();
  }
  updateUser(emp: Data) {
    this.staffService.updateUser(emp)
    .subscribe();
  }

  clearEmployee() {
    this.staffService.currentUser = {
      id: null,
      firstName: '',
      lastName: '',
      contact: 0,
      whoom: '',
      designtion: ''
    };
  }
}
