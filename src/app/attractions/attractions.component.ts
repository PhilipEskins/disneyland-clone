import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attractions.model';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.sass']
})
export class AttractionsComponent implements OnInit {

  attractions: Attraction[] = [
    new Attraction("Alice in Wonderland", "Any Height", ["Slow Rides", "Dark", "Loud"], "Disneyland Park, Fantasyland"),
    new Attraction("Animation Academy", "Any Height", ["Character Experience", "Discovery", "Indoor", "Interactive"], "Disney California Adventure Park, Hollywood Land"),
    new Attraction("Astro Orbitor", "Any Height", ["Spinning", "Interactive"], "Disneyland Park, Tomorrowland"),
    new Attraction("Autopia", "32in (81cm) or taller", ["Slow Rides", "Loud", "1955 Original Ride", "Interactive", "Rider Switch"], "Disneyland Park, Tomorrowland"),
    new Attraction("The Bakery Tour", "Any Height", ["Discovery", "Indoor"], "Disney California Adventure Park, Pacific Wharf"),
    new Attraction("Big Thunder Mountain Railroad", "40in (102cm) or taller", ["Small Drops", "Thrill Rides", "Dark", "Loud", "FASTPASS", "Rider Switch"], "Disneyland Park, Frontierland")
  ]

  constructor() { }

  ngOnInit() {
  }

}
