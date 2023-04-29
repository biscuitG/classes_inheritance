// function Myclass1(){
//     this.a=12;
//     this.b=45;
//     this.printfunct=()=>
//     {
//        console.log("hi");
//     }
// }

// const obj1=new Myclass1();
// console.log(obj1.a);


// first letter capital
class Myclass{
   
    #d=30; // #d is now private thing acces inside class
     #e;
    constructor(v1,v2,v3){
     this.a=v1;
     this.b=v2;
     this.c=v3;
     this.#d=29;  // for this #d must be delcare in class
    }

    // a=0;
    // b=0 ;  or let's not create here jsut make in constructor only

   set setA(e){
      this.#e=e;
   }
   get getE(){
      return this.#e;
   }

    print(){
        console.log(typeof(a));
    }
    printfunct= ()=>{
        console.log("Hello");
    }
}
const obj=new Myclass("hi",324,[12,123]);  // not pass undefined value of a,b
console.log(obj.print(),obj.a,obj.b,obj.c);

obj.setA=2343;
console.log(obj.getE);

// get and set are used just as replacement of function calling

const class2= class mYclass1{

}

const obj3=new class2(); // class2 is written here
console.log(obj3); // see this is important as console will be myclass1 only


// inheritance 

class A{
   #param1;
    constructor(param1){
        this.#param1=param1;
    }
}
class B extends A{
  #param2;
     constructor(param1,param2){
        super(param1);  // important
        this.#param2=param2;
     }

}