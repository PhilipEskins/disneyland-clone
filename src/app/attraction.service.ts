import { Injectable } from '@angular/core';
import { Attraction } from './attractions.model';
import { ATTRACTIONS } from './mock-attractions';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {

  constructor() { }

  getAttractions() {
    return ATTRACTIONS;
  }

  getAttractionById(attractionId: string) {
    for (let i = 0; i<=ATTRACTIONS.length - 1; i++) {
      if (ATTRACTIONS[i].id===attractionId) {
        return ATTRACTIONS[i];
      }
    }
  }
}
