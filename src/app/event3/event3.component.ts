import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf'  

@Component({
  selector: 'app-event3',
  templateUrl: './event3.component.html',
  styleUrls: ['./event3.component.css']
})

export class Event3Component implements OnInit {
  department1:any;
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

  todayDate : Date = new Date();
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

  ngOnInit(): void {
  }

}
