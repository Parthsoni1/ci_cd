import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared/staff.service';
import { Data } from 'src/app/model/data.model';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {
  Designation = ['Employee', 'Management', 'Security'];
  allData: Data[];
  staffData = [];
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
  getEmployee(department) {
    this.staffService.getEmployee(department)
    .subscribe(res => {
      console.log(res);
      this.staffData = res;
    })
  }

  clearEmployee() {
    this.staffService.currentUser = {
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: 0,
      whoom: '',
      designtion: '',
      birthDate: '',
      password: ''
    };
  }
}
