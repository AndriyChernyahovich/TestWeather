import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./weather.service";
import {interval, mergeMap} from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public temperature: number = 0;
  public humidity: number = 0;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe(res =>{
      this.humidity = res.main.humidity
      this.temperature =Math.round(res.main.temp)
    })
     interval(5*60*1000).pipe(mergeMap(() => this.weatherService.getWeatherData())).subscribe(res => {
       this.humidity = res.main.humidity
       this.temperature =Math.round(res.main.temp)
       console.log(res)
    })


  }

}
