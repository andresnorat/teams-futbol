import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamFormsComponent } from './components/team-forms/team-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { DateFilterComponent } from './components/date-filter/date-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamsComponent,
    HomeComponent,
    TeamFormsComponent,
    SearchComponent,
    DateFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
