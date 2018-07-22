import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/index";
import {State, Store} from "@ngrx/store";
import {City} from "../models/city.model";
import {AppState} from "../app.state";
import {tap} from "rxjs/internal/operators";
import * as CityActions from "../actions/city.action";
import {CityWeather} from "../services/cityWeather";
import {state} from "@angular/animations";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  providers: [CityWeather]
})
export class ReadComponent implements OnInit {

  cities$: Observable<City[]>;

  constructor(private store: Store<AppState>, private cityService: CityWeather,private state: State<AppState>) {

    this.updateCities(this.store, this.cityService,this.state,true);

    this.cities$ = store.select('city').pipe(tap(cities => localStorage.setItem('cities', JSON.stringify(cities))));

    setInterval(() => {
      this.updateCities(this.store, this.cityService,this.state,false)
    }, 1000 * 60); //раз в минуту

  }

  updateCities(store, cityService,state,flag) {
    let cities = flag === true ? JSON.parse(localStorage.getItem('cities')) : state.getValue().city;
    if (cities !== null) {
      cities.forEach(function (item, i, cities) {
        cityService.searchWeatherData(item.name).subscribe(
          data => {

            let result = {
              name: data['location']['name'],
              temp: data['current']['temp_c'],
              icon: data['current']['condition']['icon'],
              text: data['current']['condition']['text']
            };

            store.dispatch(new CityActions.UpdateCity(result));

            localStorage.setItem('cities',JSON.stringify(state.getValue().city));
          }
        )
      });
    }
  }

  ngOnInit() {
  }
}
