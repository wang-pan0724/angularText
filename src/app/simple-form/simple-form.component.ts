import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  @Input() message;
  @Output() update = new EventEmitter();

  ngOnInit() {
  }

  toClick(value){
console.log(value)
  }
}
