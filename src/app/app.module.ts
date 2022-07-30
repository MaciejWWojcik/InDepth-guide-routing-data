import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { ProfileTypeComponent } from './components/create-profile/profile-type/profile-type.component';
import { ProfileFormComponent } from './components/create-profile/profile-form/profile-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponent,
    CreateProfileComponent,
    ProfileTypeComponent,
    ProfileFormComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
