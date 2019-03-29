import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.sass']
})
export class TopComponent implements OnInit {

  adults: number = 2;
  children: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
