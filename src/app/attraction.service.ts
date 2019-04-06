import { Injectable } from '@angular/core';
import { Attraction } from './attractions.model';
// import { ATTRACTIONS } from './mock-attractions';
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

  addAttraction(newAttraction: Attraction) {
    this.attractions.push(newAttraction);
  }

  getAttractionById(attractionId: string) {
    return this.database.object('attractions/' + attractionId);
  }

  updateAttraction(localUpdatedAttraction) {
    const attractionEntryInFirebase = this.getAttractionById(localUpdatedAttraction.$key);
    const typeArr = localUpdatedAttraction.type.split(",");
    attractionEntryInFirebase.update({
      id: localUpdatedAttraction.id,
      name: localUpdatedAttraction.name,
      height: localUpdatedAttraction.height,
      type: typeArr,
      location: localUpdatedAttraction.location,
      detail: localUpdatedAttraction.detail
    })
  }
}
