import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EvaComponent } from './eva/eva.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFireAuthModule }  from '@angular/fire/auth'
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailComponent } from './email/email.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EvaComponent,
    LoginComponent,
    SignupComponent,
    MembersComponent,
    EmailComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
