import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  latg = 40.376504;
  lat1 = 41.670588;
  lat2 = 41.540642;
  lngg = -3.621422;
  lng1 = -3.708228;
  lng2 = 2.183067;
  constructor() { }

  ngOnInit() {
  }

}
