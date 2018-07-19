import { Action} from "@ngrx/store";

export const ADD_CITY = '[CITY] Add';
export const UPDATE_CITY = '[CITY] Update';
export const UPDATE_CITY_SUCCESS = '[CITY] Update Success';

export class AddCity implements  Action{
  readonly type = ADD_CITY;

  constructor(public payload)  {
  };
}

export class UpdateCity implements Action{
  readonly type = UPDATE_CITY;

  constructor(public payload) {
  };
}

export class UpdateCitySuccess implements Action{
  readonly type = UPDATE_CITY_SUCCESS;

  constructor(public payload) {
  };
}

export type Actions = AddCity | UpdateCity | UpdateCitySuccess;
