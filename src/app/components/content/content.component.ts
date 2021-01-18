import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
 
  authorized: Boolean;
  formOpend: Boolean;

  constructor() { }
  ngOnInit(): void {
  }

  onGetAuthorization(request: boolean): void {
    this.authorized = request ? request : false;
    console.log('You are authorized');
  }

  onOpenForm(): void {
    this.formOpend = true;
  }

  onCloseForm(): void {
    this.formOpend = false;
  }
}
