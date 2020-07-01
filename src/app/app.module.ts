import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { FeedbackComponent } from './feedback/feedback.component';
import { TermComponent } from './term/term.component';
import { PolicyComponent } from './policy/policy.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';
import { LiveeventsComponent } from './liveevents/liveevents.component';
import { FooterComponent } from './footer/footer.component';
import { CreateyoureventComponent } from './createyourevent/createyourevent.component';
import { AngularFireModule } from 'angularfire2';
import { BlogComponent } from './blog/blog.component';
import { Event1Component } from './event1/event1.component';
import { Event2Component } from './event2/event2.component';
import { Event3Component } from './event3/event3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  
import {CommonService} from './common.service'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    FeedbackComponent,
    TermComponent,
    PolicyComponent,
    ContactComponent,
    ModalComponent,
    LiveeventsComponent,
    FooterComponent,
    CreateyoureventComponent,
    BlogComponent,
    Event1Component,
    Event2Component,
    Event3Component,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyATDNVLPjJSk9d-qStQiwikWsPXbU3o2TI",
  authDomain: "event-management-db.firebaseapp.com",
  databaseURL: "https://event-management-db.firebaseio.com",
  projectId: "event-management-db",
  storageBucket: "event-management-db.appspot.com",
  messagingSenderId: "611457418135",
  appId: "1:611457418135:web:59f11bd1645760ebf47ad2",
  measurementId: "G-HR432D5R9F"
    }),
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
