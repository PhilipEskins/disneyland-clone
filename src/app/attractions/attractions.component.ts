import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attractions.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.sass']
})
export class AttractionsComponent implements OnInit {

  attractions: Attraction[] = [
    new Attraction("alice-in-wonderland", "Alice in Wonderland", "Any Height", ["Slow Rides", "Dark", "Loud"], "Disneyland Park, Fantasyland", "Take a topsy-turvy trip into the nonsensical world of Disney’s Alice in Wonderland aboard an oversized caterpillar."),
    new Attraction("animation-academy", "Animation Academy", "Any Height", ["Character Experience", "Discovery", "Indoor", "Interactive"], "Disney California Adventure Park, Hollywood Land", "Draw your very own character sketch under the guidance of a talented animator."),
    new Attraction("astro-orbitor", "Astro Orbitor", "Any Height", ["Spinning", "Interactive"], "Disneyland Park, Tomorrowland", "Pilot your very own rocket ship high in the sky amid a gleaming constellation of orbiting planets."),
    new Attraction("autopia", "Autopia", "32in (81cm) or taller", ["Slow Rides", "Loud", "1955 Original Ride", "Interactive", "Rider Switch"], "Disneyland Park, Tomorrowland", "Put the pedal to the metal on an unforgettable road trip along a miniature motorway."),
    new Attraction("bakery-tour", "The Bakery Tour", "Any Height", ["Discovery", "Indoor"], "Disney California Adventure Park, Pacific Wharf", "Go on a tasty tour of a real bakery and see how the world-famous San Francisco sourdough bread is made."),
    new Attraction("big-thunder-mountain-railroad", "Big Thunder Mountain Railroad", "40in (102cm) or taller", ["Small Drops", "Thrill Rides", "Dark", "Loud", "FASTPASS", "Rider Switch"], "Disneyland Park, Frontierland", "Streak through a haunted gold mine aboard a speeding train on this thrilling coaster-style ride.")
  ];

  goToDetailPage(clickedAttraction: Attraction) {
    this.router.navigate(['attractions', clickedAttraction.id]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
