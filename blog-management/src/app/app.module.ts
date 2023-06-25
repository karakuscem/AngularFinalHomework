import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { TableComponent } from './table/table.component';
import { UserListPageComponent } from './user/user-list-page/user-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent,
    UserListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TableComponent]
})
export class AppModule { }
