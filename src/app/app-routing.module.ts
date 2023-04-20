import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './components/about-us/about-us.component'
import { AdoptFormComponent } from './components/adopt-form/adopt-form.component'
import { CatsComponent } from './components/cats/cats.component'
import { ContactComponent } from './components/contact/contact.component'
import { DogsComponent } from './components/dogs/dogs.component'
import { FooterComponent } from './components/footer/footer.component'
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { OthersComponent } from './components/others/others.component'
import { SignupComponent } from './components/signup/signup.component'
import { PetsProfileComponent } from './components/pets-profile/pets-profile.component'
import { DonateComponent } from './components/donate/donate.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' }, 
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'adoptForm', component: AdoptFormComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'others', component: OthersComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cats/:id', component: PetsProfileComponent },
  { path: 'dogs/:id', component: PetsProfileComponent },
  { path: 'others/:id', component: PetsProfileComponent },
  { path: 'donate', component: DonateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
