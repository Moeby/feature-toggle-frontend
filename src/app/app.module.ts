import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FeatureToggleTableComponent} from './feature-toggle-table/feature-toggle-table.component';
import {EditFeatureToggleFormComponent} from './edit-feature-toggle-form/edit-feature-toggle-form.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {MultiSelectModule} from 'primeng/multiselect';
import {FeatureToggleService} from "./services/feature-toggle.service";
import {PersonService} from "./services/person.service";

@NgModule({
  declarations: [
    AppComponent,
    FeatureToggleTableComponent,
    EditFeatureToggleFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    InputSwitchModule
  ],
  providers: [FeatureToggleService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
