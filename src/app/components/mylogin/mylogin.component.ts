import { Component, OnInit } from "@angular/core";
import { StaffService } from "src/app/shared/staff.service";
import { Data } from "src/app/model/data.model";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: "app-mylogin",
  templateUrl: "./mylogin.component.html",
  styleUrls: ["./mylogin.component.css"]
})
export class MyloginComponent implements OnInit {
  allData: Data[];
  myData: any;
  constructor(public staffService: StaffService,   private router: Router) {}

  ngOnInit() {}

  createAndUpdte(currentUser) {
    this.staffService.getAllData().subscribe(res => {
      this.allData = res;
    });
  }


  login(loginForm) {
    console.log(loginForm);

    this.staffService.getAllData().subscribe(res => {
      this.allData = res;
      this.myData = this.allData.find(
        item => item["email"] === loginForm.email
      );

      if (this.myData.password === loginForm.password) {
        console.log("you are welcome");
        localStorage.setItem('email', this.myData.email );
      } else {
        console.log("get lost");
      }

      console.log(this.myData);
      console.log(this.allData);
    });
  }
  goToComponent(): void {
    this.router.navigate(['/forgotpass'], {state: {data: this.myData}});
}
}
