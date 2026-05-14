import { Component } from '@angular/core';
import {DUMMY_USERS} from '../dummy-user';
const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent {
   selectUser=DUMMY_USERS[randomIndex]
  protected readonly name = name;
   get imagePath(){
     return 'assets/users/'+this.selectUser.avatar;
   }
   onSelectUser(){
     const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
     this.selectUser=DUMMY_USERS[randomIndex]
     console.log("user...")
   }
}
