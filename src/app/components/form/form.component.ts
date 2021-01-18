import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() getAuthorization = new EventEmitter<boolean>();
  @Output() onCloseForm = new EventEmitter();

  @Input() authorized: boolean;
  @Input() formOpend: boolean;

   email: string;

  constructor() { }

  ngOnInit(): void {
  }

  onAuthorized() {
    this.getAuthorization.emit(true);
    this.onCloseForm.emit(null);
  }

}
