import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { SettingsProfileComponent } from './settings/settings-profile/settings-profile.component';
import { SettingsContactsComponent } from './settings/settings-contacts/settings-contacts.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'settings',
  component: SettingsComponent,
  children: [
    { path: '', redirectTo: 'set-profile', pathMatch: 'full' },
    { path: 'set-profile/:username/:userid', component: SettingsProfileComponent },
    { path: 'set-profile/:username', component: SettingsProfileComponent },
    { path: 'set-profile', component: SettingsProfileComponent },
    { path: 'set-contact', component: SettingsContactsComponent},
    {path: '**', component: PathNotFoundComponent}
   ]},
  {path: '**', component: PathNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
