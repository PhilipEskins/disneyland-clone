import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  isHidden: boolean = true;

  displayList(event) {
    this.isHidden = false;
    console.log(this.isHidden);
  }

  constructor() { }

  ngOnInit() {
  }

}
