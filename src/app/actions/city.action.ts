import { Injectable} from "@angular/core";
import { Action} from "@ngrx/store";
import { City} from "../models/city.model";

export const ADD_CITY = '[CITY] Add';
export const REMOVE_CITY = '[CITY] Remove';

export class AddCity implements  Action{
  readonly type = ADD_CITY;

  constructor(public payload: number)  {}
}

export class RemoveCity implements Action{

  readonly type = REMOVE_CITY;

  constructor(public payload: number) {}

}

export type Actions = AddCity | RemoveCity;
