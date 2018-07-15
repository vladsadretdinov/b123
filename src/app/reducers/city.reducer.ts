import { Action } from "@ngrx/store";
import { City} from "../models/city.model";
import * as CityActions from './../actions/city.action';
// import { Action } from "../actions/city.action";


// const initialState: City = {
//   name: 'Kazan',
//   temp: 23
// };

let initialState: City[] = [];

let keys = Object.keys(localStorage),
  i = keys.length;

while ( i-- ) {
  initialState.push( {
    name:  localStorage.key( i ) ,
    temp: JSON.parse(localStorage.getItem(keys[i]))['temp'] ,
    icon: JSON.parse(localStorage.getItem(keys[i]))['icon'] })
}

export function reducer(state: City[] = initialState, action: CityActions.Actions) {
  switch (action.type) {
    case CityActions.ADD_CITY:
      return [...state,action.payload];
    // case CityActions.REMOVE_CITY:
    //   state.splice(action.payload, 1);
    //   return state;
    default:
      state.splice(action.payload, 1);
      return state;
  }
}
