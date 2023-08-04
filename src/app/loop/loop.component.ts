import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.scss']
})
export class LoopComponent {
  title= 'For Loop';
  users = ['Vaidik','Dharmik', 'Aastha', 'Chirag'];
  userDetails = [{name:'vaidik',email:'vaidik@test.com',mobile:11111,accounts:['Facebook','Youtube','Insta']},{name:'dharmik',email:'dharmik@test.com',mobile:11331,accounts:['LinkedIn','Youtube','Thread']},{name:'aastha',email:'aastha@test.com',mobile:111551,accounts:['insta','Youtube','facebook']},{name:'chirag',email:'chirag@test.com',mobile:1455111,accounts:['Facebook','Youtube','Insta']}]
}
