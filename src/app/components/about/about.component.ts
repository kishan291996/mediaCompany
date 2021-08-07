import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutContent="MediaMonks is a global creative production company that partners with clients across industries and markets to craft amazing work for leading businesses and brands."
  constructor() { }

  ngOnInit(): void {
  }

}
