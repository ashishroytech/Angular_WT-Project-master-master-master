import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import * as jsPDF from 'jspdf'  
@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.css']
})
export class Event1Component implements OnInit {
// let datetime= new Date();
todayDate : Date = new Date();
  @ViewChild('content') content: ElementRef;
  public downloadpdf(){
  let doc1 = new jsPDF();

  let specialEventHandlers={
    '#editor':function(element,rendeer){
      return true;
    }
  };
  let content =this.content.nativeElement;
  doc1.fromHTML(content.innerHTML,15,15,{
    'width':190,
    'elementHandlers':specialEventHandlers
  });
  doc1.save('ticket.pdf');
  }

  selectedLevel: any;
  data:Array<Object> = [
      {id: 1,name:'1'},
      {id: 2,name:'2'},
      {id: 3,name:'3'},
      {id: 4,name:'4'},
      {id: 5,name:'5'},
      {id: 6,name:'6'},
      {id: 7,name:'7'},
      {id: 8,name:'8'},
      {id: 9,name:'9'},
      {id: 10,name:'10'}
  ];

  random1 : number;
  getRandomNumberBetween(){
    var min=10000; 
    var max=99999; 
    
     this.random1 = Math.floor(Math.random() * (+max - +min) + +min); 
}

constructor() { }

id: number;
name: string;
department1:any;

department: Array<Object> =[
  { id: 1, name: 'Help Desk' },
  { id: 2, name: 'HR' },
  { id: 3, name: 'IT' },
  { id: 4, name: 'Payroll' }
];

  ngOnInit(): void {
  }

}
