import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() openForm = new EventEmitter();//метод из content

  constructor() { }

  ngOnInit(): void {
  }

  onOpenForm():void {
    this.openForm.emit(null);
  }
}
