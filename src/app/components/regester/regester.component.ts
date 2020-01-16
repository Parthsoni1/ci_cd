import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {
  Designation = ['Employee', 'Management', 'Security'];
  constructor(public staffService: StaffService) { }

  ngOnInit() {
  }
  createAndUpdte(emp) {
    console.log(emp);
    
    this.staffService.createEmployee(emp)
    .subscribe(res => {
      console.log(res);
      
    })
    
  }
}
