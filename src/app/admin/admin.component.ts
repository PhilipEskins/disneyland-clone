import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attractions.model';
import { AttractionService } from '../attraction.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [AttractionService]
})
export class AdminComponent implements OnInit {

  constructor(private attractionService: AttractionService) { }

  ngOnInit() {
  }

  submitForm(id: string, name: string, height: string, type: string, location: string, detail: string) {
    const typeArr = type.split(',');
    const newAttraction: Attraction = new Attraction(id, name, height, typeArr, location, detail);
    this.attractionService.addAttraction(newAttraction);
  }

}
