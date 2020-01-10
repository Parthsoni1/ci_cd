import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared/staff.service';
import { Data } from 'src/app/model/data.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  allData: Data[];
  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.getUsers();
  }
getUsers() {
  this.staffService.getAllData()
  .subscribe(
    (data: Data[]) => {
      console.log('re');
      this.allData = data;
      console.log(data);
    }
  )
}
edit(user) {
  this.staffService.currentUser = Object.assign({}, user);
}
delete1Data(id) {
  this.staffService.delete1Data(id)
  .subscribe(
    (data: Data) => {
      this.getUsers();
    }
  )
}


}
