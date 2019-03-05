import { Injectable } from '@angular/core';
import { Users } from '../user/Users';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:Users[];

  data:Observable<any>;

  constructor() {
    this.users= [
      {
        firstname:'Burce',
        lastname:'Kahraman',
        age:24,
        adress : {
          street:'AAAA',
          state:'BBBB',
          city:'CCCC'
        },
        email:'burce@gmail.com',
      //  image:'http://lorempixel.com/600/600/people/3',
        isActive:true,
        hide:true
       
      //  balance:1000,
      // registered:new Date('02/26/2019')
      },
      {
        firstname:'Ali',
        lastname:'Kahraman',
        age:24,
        adress : {
          street:'AAAA',
          city:'BBBB',
          state:'CCCC'
        },
        email:'ali@gmail.com',
       // image:'http://lorempixel.com/600/600/people/2',
        isActive:false,
        hide:true
      }, 
    
      {
        firstname:'Ayşe',
        lastname:'Kahraman',
        age:24,
        adress : {
          street:'AAAA',
          city:'BBBB',
          state:'CCCC'
        },
        email:'ayse@gmail.com',
       // image:'http://lorempixel.com/600/600/people/1',
        isActive:true,
        hide:true
      }
    ];
   }


   getData(){
     this.data = new Observable(observer =>{
       setTimeout(() => {
         observer.next(1); 
       }, 1000);
       setTimeout(() => {
        observer.next(2); 
      }, 2000);
     }
     );
     return this.data;

   }
   getUsers(): Observable<Users[]>
   {
      return of(this.users);
   }
   addUsers(user:Users) 
   {
    this.users.unshift(user);
   }
}
