import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {header} from './header';
import { UserComponent } from './user-component/user-component';
import {DUMMY_USERS} from '../assets/DUMMY-USER';
import {Tasks} from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, header, UserComponent,Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // selectUsersId?:string;---for checking the if else
  //   selectUsersId='u1;--actual...

  selectUsersId?:string;
  users=DUMMY_USERS;
  onselectUsers(id:string){
    console.log("The user id is"+id);
    this.selectUsersId=id;
  }
  get selectteduser(){
    return this.users.find((user)=>user.id===this.selectUsersId);
  }
  protected readonly title = signal('app1');
}
