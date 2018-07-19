import { Component, OnInit } from '@angular/core';

import { Observable} from "rxjs/index";
import { Store } from "@ngrx/store";
import { City} from "../models/city.model";
import { AppState} from "../app.state";
import * as CityActions from "../actions/city.action";
import { CityWeather } from "../services/cityWeather";
import {tap} from "rxjs/internal/operators";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // cities: Observable<City[]>;
  cities$: Observable<City[]>;

  constructor(private store: Store<AppState>) {

    // this.cities$ = store.select('city');

    setInterval(()=> {
      let cities =  JSON.parse(localStorage.getItem('cities'));
      cities.forEach(function(item, i, cities) {
        console.log(item);
      });
    }, 15*1000); //15сек для наглядности

    this.cities$ = store.select('city').pipe(tap(cities => localStorage.setItem('cities', JSON.stringify(cities))));
  }

  ngOnInit() {
  }

}
