import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attractions.model';
import { Router } from '@angular/router';
import { AttractionService } from '../attraction.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.sass'],
  providers: [AttractionService]
})
export class AttractionsComponent implements OnInit {
  attractions: FirebaseListObservable<any[]>;

  goToDetailPage(clickedAttraction) {
    this.router.navigate(['attractions', clickedAttraction.$key]);
    // this.router.navigate(['attractions', clickedAttraction.id]);
  }

  constructor(private router: Router, private attractionService: AttractionService) { }

  ngOnInit() {
    this.attractions = this.attractionService.getAttractions();
  }

}
