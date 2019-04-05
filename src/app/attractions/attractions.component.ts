import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attractions.model';
import { Router } from '@angular/router';
import { AttractionService } from '../attraction.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.sass'],
  providers: [AttractionService]
})
export class AttractionsComponent implements OnInit {
  attractions: Attraction[];

  goToDetailPage(clickedAttraction: Attraction) {
    this.router.navigate(['attractions', clickedAttraction.id]);
  }

  constructor(private router: Router, private attractionService: AttractionService) { }

  ngOnInit() {
    this.attractions = this.attractionService.getAttractions();
  }

}
