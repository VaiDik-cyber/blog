import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent {
  title='Style-Binding';
  color = 'red';
  bgColor = 'orange';
  clicked = false;

  // updateColor(){
    
  //   // if(this.clicked===true){
  //   //   this.color = 'red';
  //   //   this.bgColor = 'orange';
  //   // }
  //   // else{
  //   //   this.color = 'skyblue';
  //   //   this.bgColor = 'blue';
  //   // }
  //   // this.clicked = !this.clicked;

  // }
}
