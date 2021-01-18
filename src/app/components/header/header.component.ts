import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() authorized: boolean;// позволяет следить за изменениями данных (в нашем случае "authorized") в content компоненте

  constructor() { }

  ngOnInit(): void {
  }

}
