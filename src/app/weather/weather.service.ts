import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getWeatherData(): Observable<any> {
return this.http
  .get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=4be6a006f282cb5751e0d8d530cad2c0')
  }
}
