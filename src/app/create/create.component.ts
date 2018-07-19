import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { City } from "../models/city.model";
import *  as CityActions from './../actions/city.action';
import { Observable } from "rxjs/index";
import { CityWeather } from "../services/cityWeather";
import {tap} from "rxjs/internal/operators";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CityWeather]
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>,private cityService: CityWeather) {
  };

  addCity(name) {
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

    // console.log(AppState.city);
    // localStorage.setItem('cities', JSON.stringify(action.payload));
    // this.store.select('city').subscribe(data=> console.log(data));
    // this.localStorage.addCity(this.store)
    // console.log(2);
    // localStorage.setItem('cities', name);
    // this.store.select('city').pipe(tap(cities => localStorage.setItem('cities', JSON.stringify(cities))));
    // this.store.select('city').pipe(tap(cities=> console.log(cities)));
    // this.store.select('city').pipe(tap(cities => console.log('vlad')));
    // console.log('addtostorage');
    // console.log(3);

    // localStorage.setItem('cities', name);
    // localStorage.setItem('cities', JSON.stringify(this.store.select("city")));
  }

  // update(name) {
  //   this.store.dispatch(new CityActions.UpdateCity(name));
  // }

//   update1(name) {
//     this.cityService.searchWeatherData(name).subscribe(
// data => {
//   localStorage.setItem(name, JSON.stringify({ 'temp': data['current']['temp_c'], icon: data['current']['condition']['icon'] }));
//   console.log(data['current']['temp_c']);
//
//   // this.store.dispatch(new CityActions.RemoveCity(0) );
//
//   this.store.dispatch(new CityActions.AddCity(
//     {
//       name:name,
//       temp: data['current']['temp_c'],
//       icon: data['current']['condition']['icon']
//     }));
//
//      });
//  }

//   ngOnInit() {
//   }
// }
  ngOnInit() {

  }
}
