import { Component, OnInit, Input } from '@angular/core';
import { AttractionService } from '../attraction.service';

@Component({
  selector: 'app-edit-attraction',
  templateUrl: './edit-attraction.component.html',
  styleUrls: ['./edit-attraction.component.sass'],
  providers: [AttractionService]
})
export class EditAttractionComponent implements OnInit {
  @Input() selectedAttraction;

  constructor(private attractionService: AttractionService) { }

  ngOnInit() {
  }

  beginUpdatingAttraction(attractionToUpdate) {
    this.attractionService.updateAttraction(attractionToUpdate);
    console.log(attractionToUpdate);
  }

  beginDeletingAttraction(attractionToDelete) {
    if(confirm("Are you sure you want to delete this attraction?")) {
      this.attractionService.deleteAttraction(attractionToDelete);
    }
  }

}
