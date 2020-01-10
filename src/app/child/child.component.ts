import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  message: string;
  @Input() loggedIn: boolean;
  name = 'Parth';
  @Output() greetEvent = new EventEmitter();
  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
    if(this._interactionService.newMessage === 'Well Done') {
    alert(this._interactionService.newMessage);
  }
    // this._interactionService.teacherMessage$
    // .subscribe(
    //   message => {
    //     if(message ==='good morning') {
    //       alert('good morning teacher')
    //     } else if(message === 'Well Done') {
    //       alert('Thank you teacher')
    //     }
    //   }
    // )
  }
  ngOnChanges(changes: SimpleChanges ) {
    console.log('changes', changes);
    const loggedInValue = changes['loggedIn'];
    
    if (loggedInValue.currentValue === true) {
      this.message = 'Welcome back Vishwas';
    } else {
      this.message = 'Please log in';
    }
  }
  greetVishwas() {
    alert('Parth');
  }
  callParentGreet() {
    this.greetEvent.emit(this.name);
  }
}
