import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubinComponent } from './subin/subin.component';
import { HyunjinComponent } from './hyunjin/hyunjin.component';
import { SooyoungComponent } from './sooyoung/sooyoung.component';
import { SignUpComponent } from './subin/sign-up/sign-up.component';
import { SignInComponent } from './subin/sign-in/sign-in.component';
import { MainComponent } from './subin/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/subin', pathMatch: 'full' },
  {
    path: 'subin',
    component: SubinComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signup', component: SignUpComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'main', component: MainComponent },
    ],
  },
  { path: 'hyunjin', component: HyunjinComponent },
  { path: 'sooyoung', component: SooyoungComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
