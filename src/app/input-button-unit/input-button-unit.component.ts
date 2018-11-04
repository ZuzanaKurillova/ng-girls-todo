import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title: string;
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('in constructor');
    this.title = 'Hello girls!';
    this.changeTitle(this.createNewTitle(('titulok'));
  }

  ngOnInit() {
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }
  changeTitle(newTitle: string) {
     this.title = newTitle;

  }
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
 }

  changeTitleEvent(title): void {
    console.log(title);
    this.title = title;
  }

  createNewTitle(newTitle: string): string {
    return newTitle;
  }


}
