import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { CatsComponent } from './components/cats/cats.component';
import { OthersComponent } from './components/others/others.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdoptFormComponent } from './components/adopt-form/adopt-form.component';
import { PetsProfileComponent } from './components/pets-profile/pets-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    DogsComponent,
    CatsComponent,
    OthersComponent,
    LoginComponent,
    SignupComponent,
    AdoptFormComponent,
    PetsProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
