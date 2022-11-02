import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public features = [
'Feature 1',
'Feature 2',
'Feature 3',
'Feature 4',
'Feature 5',
'Feature 6',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
