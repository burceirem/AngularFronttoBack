export interface Users {
    firstname:string;
    lastname:string;
    age?:number;
    adress?:{
        street?:string;
        city?:string;
        state?:string;
    };
    image?:string;
    isActive?:boolean;
    balance?:number;
    registered?:any;
    hide?:boolean;
    email:string;

}