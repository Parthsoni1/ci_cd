import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared/staff.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-passchange',
  templateUrl: './passchange.component.html',
  styleUrls: ['./passchange.component.css']
})
export class PasschangeComponent implements OnInit {
  password: {
    password: string,
    confpass: string
  };
  userId: any;
  constructor(public staffService: StaffService, private router: Router,   private route: ActivatedRoute,) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);
    
  }
  passChange(e) {
    console.log(e)
    if(e.password == e.confpass) {
      console.log('yes')
      this.staffService.changePass(this.userId, {password: e.password})
      .subscribe(res=> {
        console.log(res);
        this.router.navigate(['header/login']);
        
      })
    }
  }
}
