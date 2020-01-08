import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cicd';
  imgUrl = 'https://picsum.photos/200';
  points = 0;
  name: string;
  userName: string;

  plus1() {
    this.points += 1;
  }

  reset() {
    this.points = 0;
  }
  greet(updatValue) {
    this.userName = updatValue;
  }
}
