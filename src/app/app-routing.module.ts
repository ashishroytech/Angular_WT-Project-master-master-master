import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TermComponent } from './term/term.component';
import { PolicyComponent } from './policy/policy.component';
import { ContactComponent } from './contact/contact.component';
import { LiveeventsComponent } from './liveevents/liveevents.component';
import { CreateyoureventComponent } from './createyourevent/createyourevent.component';
import { BlogComponent } from './blog/blog.component';
import { Event1Component } from './event1/event1.component';
import { Event2Component } from './event2/event2.component';
import { Event3Component } from './event3/event3.component';



const routes: Routes = [
  {path : 'login',component:LoginComponent},
  {path : 'home' , component:HomeComponent},
  {path : 'feed' , component:FeedbackComponent},
  {path : 'terms' , component:TermComponent},
  {path : '' , component:HomeComponent},
  {path : 'policy' ,component:PolicyComponent},
  {path : 'contact' , component:ContactComponent},
  {path : 'liveevents',component:LiveeventsComponent},
  {path : 'register',component:CreateyoureventComponent},
  {path:   'blog',component:BlogComponent},
  {path : 'event1' , component:Event1Component},
  {path : 'event2' , component:Event2Component},
  {path : 'event3' , component:Event3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
