import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { SettingsProfileComponent } from './settings/settings-profile/settings-profile.component';
import { SettingsContactsComponent } from './settings/settings-contacts/settings-contacts.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    PathNotFoundComponent,
    SettingsProfileComponent,
    SettingsContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
