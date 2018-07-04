import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './users/search-users/search-users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
