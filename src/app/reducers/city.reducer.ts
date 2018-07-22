import {City} from "../models/city.model";
import * as CityActions from './../actions/city.action';

let localStorageData = JSON.parse(localStorage.getItem('cities'));
let initialState: City[] = localStorageData === null ? [] : localStorageData;

export function reducer(state: City[] = initialState, action: CityActions.Actions) {
  switch (action.type) {
    case CityActions.ADD_CITY: {
      return [...state, action.payload];
    }
    case CityActions.UPDATE_CITY: {

      state.forEach(function (item, i, arr) {
        if (item.name === action.payload.name) {

          state[i].temp = action.payload.temp;
          state[i].icon = action.payload.icon;
          state[i].text = action.payload.text;

          return state;
        }
      });

      return state;
    }
    default:
      return state;
  }
}
