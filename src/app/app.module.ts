import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers/city.reducer";
import {ReadComponent} from './read/read.component';
import {CreateComponent} from './create/create.component';

import {HttpClientModule} from "@angular/common/http";

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      city: reducer
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
