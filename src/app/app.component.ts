import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit
} from "@angular/core";
import { ChildComponent } from "./child/child.component";
import { InteractionService } from "./interaction.service";
import { StaffService } from './shared/staff.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, OnInit {
  title = "cicd";
  imgUrl = "https://picsum.photos/200";
  points = 0;
  name: string;
  userName: string;
  _customerName: string;
  userLoggedIn = true;

  @ViewChild("nameRef", { static: false }) nameElementref: ElementRef;
  // @ViewChild(ChildComponent, {static: false}) childComponentRef: ChildComponent;

  constructor(private _interactionService: InteractionService, public staffService: StaffService ) {}

  ngAfterViewInit() {
    // this.nameElementref.nativeElement.focus();
    // console.log(this.nameElementref);
    // this.childComponentRef.message = 'message from parent';
  }
  ngOnInit() {}

  plus1() {
    this.points += 1;
    this.userLoggedIn = !this.userLoggedIn;
    console.log("this.userLoggedIn ", this.userLoggedIn);
  }

  reset() {
    this.points = 0;
  }

  greet(updatValue) {
    alert("hello " + updatValue);
    // this.userName = updatValue;
  }
  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
  }
  greetStudent() {
    this._interactionService.sendMessage("good morning");
  }
  greetTeacher() {
    this._interactionService.newMessage = "Well Done";
    this._interactionService.sendMessage("Well Done");
  }
  // createAndUpdte(currentUser) {
  //   this.staffService.getAllData()
  //   .subscribe(
  //     res => {
  //       this.allData = res;
  //     }
  //   );
  // }
}
