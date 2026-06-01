import {Component, computed, EventEmitter, input, Input, Output, signal} from '@angular/core';
import {DUMMY_USERS} from '../../assets/DUMMY-USER';
import {User} from './user.model';
// import {DUMMY_USERS}
const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
// we can use the object also
// type User={
//   id:string,
//   name:string,
//   avatar:string
// }
// and also we can use the interface
// interface User{
//   id:string,
//    name:string,
//    avatar:string
// }
@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
// NOW THIS PROPEERTY  SI SETTABLEFROM OUTSDE
export class UserComponent {
  //    selectUser= signal(DUMMY_USERS[randomIndex])
  // protected readonly name = name;
   get imagePath(){
     return 'assets/users/'+this.user.avatar;
   }
  //  // using signals
  // imagePath=computed(()=>
  //   'assets/users/' + this.avatar()
  // );
  // @Input({required:true})id!:string
  // @Input({required:true}) avatar!:String;
  // @Input({required:true})name!:string;
  // @Input({required:true})user!:{
  //   id:string,
  //   name:string,
  //   avatar:string
  // }
  // also we can write  like
 @Input({required:true})user!:User
  @Input({required:true})selcted!:boolean;
  @Output()select=new EventEmitter();
  //  --------------------
  // For AngularSignals
  // avatar=input.required<string>()
  // name=input.required<string>()
  // --------------------
   onSelectUser(){
     // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
     // // this.selectUser=DUMMY_USERS[randomIndex]
     // // using signal
     // this.selectUser.set(DUMMY_USERS[randomIndex]);
     // console.log("user...")
     this.select.emit(this.user.id)
   }
  // ----------------------------------

}
