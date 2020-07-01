import { Component } from '@angular/core';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare const blog:any;
@Component({
  selector: 'app-root',
  template: `<app-nav></app-nav>

      <router-outlet></router-outlet>
      <app-footer></app-footer>
      `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WT-Project';

}
