import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Attraction } from '../attractions.model';

@Component({
  selector: 'app-attractions-detail',
  templateUrl: './attractions-detail.component.html',
  styleUrls: ['./attractions-detail.component.sass']
})
export class AttractionsDetailComponent implements OnInit {
  attractionId: string = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.attractionId = urlParameters['id'];
    });
  }

}
