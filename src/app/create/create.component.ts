import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { City } from "../models/city.model";
import *  as CityActions from './../actions/city.action';
import { Observable } from "rxjs/index";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { };


  addCity(name,temp) {
    this.store.dispatch(new CityActions.AddCity({ name:name,temp:temp }));
  }

  ngOnInit() {
  }

}
