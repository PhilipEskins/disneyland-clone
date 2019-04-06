import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-attraction',
  templateUrl: './edit-attraction.component.html',
  styleUrls: ['./edit-attraction.component.sass']
})
export class EditAttractionComponent implements OnInit {
  @Input() selectedAttraction;

  constructor() { }

  ngOnInit() {
  }

}
