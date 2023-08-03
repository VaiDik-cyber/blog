import { Component } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent {
Name= ['vaidik','bhavik','dharmik','krupesh'];
userName = 'bhavik';
hello = "";
i=0;
displayData = '';
getName(){
  if(this.hello.length == 0)
  this.hello = 'hello';
  else
  this.hello = ''
}
userList(text:String){
  console.warn(text);
}
showData(data:string){
  console.log(data);
  this.displayData = data;
}
}
