import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count= 0;
  counter(counterType:string){
    counterType === 'add'? this.count++ :(this.count<1?this.count=0:this.count--);
  }
}
