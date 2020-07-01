import { Component, OnInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, EmailValidator, } from '@angular/forms';  
import {CommonService} from '../common.service';  
import {Http,Response, Headers, RequestOptions } from '@angular/http';  
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  todayDate : Date = new Date();
  address:string;
  name:string;
  id:number;
  email3:string;
  constructor(private newService :CommonService) {   }  
   Repdata;  
   valbutton ="Save";  
   
   
ngOnInit() {    
  this.newService.GetUser().subscribe(data =>  this.Repdata = data)  
}  
  
onSave = function(user,isValid: boolean) {    
 user.mode= this.valbutton;  
  this.newService.saveUser(user)  
  .subscribe(data =>  {  alert(data.data);  
       
    this.ngOnInit();    
  }   
  
  , error => this.errorMessage = error )  
  
    
}      
edit = function(kk) {  
this.id = kk._id;  
this.name= kk.name;  
this.address= kk.address;  
this.todayDate=kk.todayDate;
this.email3=kk.email3;
this.valbutton ="Update";  
}  
  
delete = function(id) {  
this.newService.deleteUser(id).subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  

}
