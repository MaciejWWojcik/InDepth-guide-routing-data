import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { ProfileTypeComponent } from './components/create-profile/profile-type/profile-type.component';
import { ProfileFormComponent } from './components/create-profile/profile-form/profile-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'full', component: ViewProfileComponent, data: { fullView: true } },
  { path: 'short', component: ViewProfileComponent, data: { fullView: false } },
  {
    path: 'create-profile', component: CreateProfileComponent, children: [
      { path: '', redirectTo: 'type', pathMatch: 'full' },
      { path: 'type', component: ProfileTypeComponent },
      { path: 'data', component: ProfileFormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
