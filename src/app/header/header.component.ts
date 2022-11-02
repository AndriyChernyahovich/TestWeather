import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMobileHidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showMobileMenu(): void {
    this.isMobileHidden = !this.isMobileHidden;
    console.log(this.isMobileHidden)
  }

}
