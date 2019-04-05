import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Attraction } from '../attractions.model';
import { AttractionService } from '../attraction.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-attractions-detail',
  templateUrl: './attractions-detail.component.html',
  styleUrls: ['./attractions-detail.component.sass'],
  providers: [AttractionService]
})
export class AttractionsDetailComponent implements OnInit {
  attractionId: string;
  attractionToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private attractionService: AttractionService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.attractionId = urlParameters['id'];
    });
    this.attractionToDisplay = this.attractionService.getAttractionById(this.attractionId);
  }

}
