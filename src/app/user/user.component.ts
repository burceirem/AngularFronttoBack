import { Component, OnInit,ViewChild } from '@angular/core';
import { Users } from './Users';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:Users = {
    firstname:'',
    lastname:'',
    adress:{
      street:'',
      city:'',
      state:''
    },
    age:null,
    email:''
  };

  users:Users[];
  showExtended :boolean=true; 
  loaded:boolean=false;
  enableAdd:boolean=true;
  currentClass = {};
  currentStyle = {};
  showUserForm:boolean = true;
  @ViewChild ('userForm ') form:any;
  data:any;
 
  
  
  constructor(private dataService:DataService) {}

  ngOnInit(){

    this.dataService.getData().subscribe(data => {
      console.log(data);
    });

    this.dataService.getUsers().subscribe(users => {
      this.users = users
    });

    // setTimeout(() => {
    //   this.users= [
    //     {
    //       firstname:'Burce',
    //       lastname:'Kahraman',
    //       age:24,
    //       adress : {
    //         street:'AAAA',
    //         state:'BBBB',
    //         city:'CCCC'
    //       }
    //     },
    //     {
    //       firstname:'Ali',
    //       lastname:'Kahraman',
    //       age:24,
    //       adress : {
    //         street:'AAAA',
    //         city:'BBBB',
    //         state:'CCCC'
    //       }
    //     }, 
      
    //     {
    //       firstname:'Ayşe',
    //       lastname:'Kahraman',
    //       age:24,
    //       adress : {
    //         street:'AAAA',
    //         city:'BBBB',
    //         state:'CCCC'
    //       }
    //     }
    //   ]
    //   this.loaded=true;
      
    // }, 2000);  //TEST ETMEK İÇİN KULLANILABİLİR...
    
 
  //  this.showExtended=false;

    // this.addUser(
    //   {
    //     firstname:'Bahar',
    //     lastname:'Kahraman',
    //     age:24,
    //     adress : {
    //       street:'AAAA',
    //       city:'BBBB',
    //       state:'CCCC'
    //     }
    //   }
    // );

    this.setCureentClass();
    this.setCurrentStyle();
  
  }
  addUser(){

    this.users.push(this.user);
    this.user = {
      firstname:'',
      lastname:'',
      adress:{
        street:'',
        city:'',
        state:''
      },
      age:null,
      email:''

    }
  }

  setCureentClass(){
    this.currentClass = {  
       'btn-success': this.enableAdd ,
       'big-text':this.showExtended
    } 
  }
  
  setCurrentStyle(){
    this.currentStyle = {
      'padding-top': this.showExtended ? '0px' : '40px'
    }
  }

  fireevent(e){
    console.log(e.type);
    
  }

  toggleHide(user:Users){
    user.hide= !user.hide;
  }
  
  onSubmit({value,valid }: {value:Users,valid:boolean})
  {
  if(!valid){
    console.log('Form is not valid');
  }else
  {
    console.log(value);
    value.isActive =true;
    value.registered=new Date();
    value.hide=true;

    this.dataService.addUsers(value);
    this.form.reset();
    
  }
 
  }
  

 
}
