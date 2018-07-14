import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { City } from "../models/city.model";
import *  as CityActions from './../actions/city.action';
import { Observable } from "rxjs/index";
import { CityWeather } from "../services/cityWeather";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CityWeather]
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>,private cityService: CityWeather) { };

  addCity(name,temp) {
    this.cityService.searchWeatherData(name).subscribe(
      data => {
        this.store.dispatch(new CityActions.AddCity(
          {
            name:name,
            temp: data['current']['temp_c'],
            icon: data['current']['condition']['icon']
          }));
      }
    );
  }

  ngOnInit() {
  }

}
