import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared/staff.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  ifCheck = false;
  details: {
    email: string,
    contactNumber: string,
    birthDate: string
  }
  constructor(public staffService: StaffService, private router: Router) { }

  ngOnInit() {
  }

  checkDetail(e) {
    console.log('e ', e);
    console.log('e ', e.email);
    this.staffService.checkMail(e.email)
    .subscribe(res => {
      console.log(res)
      const myData = res[0];
      console.log(myData);

      if(e.contactNumber ===myData.contactNumber){
        this.ifCheck = true ;
        this.router.navigate(['/changepass', myData.id]);
      }
    }
    );
  }
}
