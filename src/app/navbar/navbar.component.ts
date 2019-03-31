import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  // isHidden: boolean = true;
  //
  // changeHidden(event) {
  //   this.isHidden = !this.isHidden;
  //   console.log(this.isHidden);
  // }
  //
  // displayList() {
  //   if(this.isHidden === true) {
  //     return "hideList";
  //   } else {
  //     return "showList";
  //   }
  // }

  constructor() { }

  ngOnInit() {
  }

}
