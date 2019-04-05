import { Injectable } from '@angular/core';
import { Attraction } from './attractions.model';
import { ATTRACTIONS } from './mock-attractions';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {
  attractions: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.attractions = database.list('attractions');
  }

  getAttractions() {
    return this.attractions;
  }

  getAttractionById(attractionId: string) {
    for (let i = 0; i<=ATTRACTIONS.length - 1; i++) {
      if (ATTRACTIONS[i].id===attractionId) {
        return ATTRACTIONS[i];
      }
    }
  }
}
