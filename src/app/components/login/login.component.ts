import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared/staff.service';
import { Data } from 'src/app/model/data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allData: Data[];
  constructor(public staffService: StaffService) { }

  ngOnInit() {

  }
  createAndUpdte(currentUser) {
    this.staffService.getAllData()
    .subscribe(
      res => {
        this.allData = res;
      }
    );
  }
}
