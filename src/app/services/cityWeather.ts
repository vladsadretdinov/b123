import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()

export class CityWeather {
  constructor(private http: HttpClient) {
  }

  searchWeatherData(cityName: string): Observable<any> {
    return this.http.get('http://api.apixu.com/v1/forecast.json?key=65a63211a1954d04ac1163151181407&q=' + cityName);
  }
}
