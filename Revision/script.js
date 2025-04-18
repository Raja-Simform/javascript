// class User{
//     constructor(name="raja",age=20){
//             this.name=name;
//             this.age=age;
//     }
//     get name(){
//         return this._name;
//     }
//     set name(name){
//          this._name=name;
//     }

// }
// User.prototype.mymethod= function(){
//     console.log("hello world",this.name,this.age);
// }
// const val=new User("dhruv",55);
// val.mymethod();
// // console.log(User.prototype.mymethod());

// class User{
  
//   static age=30;
//   #color="blue";
//   constructor(name){
//     this.name=name;
//   }
//   hello(){
//     console.log(this.#color);
//   }
// }
// const user=new User("raja");
// user.hello();




// const obj={
//   name:"raja",
//   hello(){
//     return("hello");
//   }
// }
// Object.defineProperty(obj,"age",{
//   value:'55',
//   writable:true,
//   enumerable:true,
//   configurable:false,
// })
// Object.defineProperty(obj,"age",{
//   value:'100',
//   writable:true,
//   enumerable:true,
//   configurable:true,
// })
// console.log(obj.age);
// for(let i in obj){
//   console.log(i);
// }

// const first=document.getElementsByTagName('DIV');
// console.log(first);
// for(let i of first){
//   console.log(i);
// }
// const elem=document.querySelector('.second');

// // elem.outerHTML=`<ul>
// // <li>1</li>
// // <li>2</li>
// // <li>3</li>
// // <li>4</li>
// // </ul>`;
// // console.log(elem);

// elem.classList.toggle();


// const x=20;
// function me(){
//     let x=100;
//     console.log(x);
// }
// console.log(x);
// me();
// console.log(x);

// let randomValue = { name: "Lydia" }
// randomValue = 23
// console.log(typeof randomValue)
// if ((!typeof randomValue) === "string") {
// 	console.log("It's not a string!")
// } else {
// 	console.log("Yay it's a string!")
// }


// const keys = ["name", "age"]
// const values = ["Lydia", 22]

// const method =fromEnteries
// Object[method](keys.map((_, i) => {
// 	return [keys[i], values[i]]
// })) // { name: "Lydia", age: 22 }


// Array.prototype.myslice=function(start,end){
//     const arr=[];  
//     for(let i=start;i<end;i++){
//            arr.push(this[i]);         
//     }
//     return arr;
// }
// console.log([1,2,3,4,56,8,7].myslice(1,3));

// console.log(String instanceof Object);
// "use strict"
// const hello={
//     name:"raja",
//     printmetod:function(){
//         console.log(`${this.name}`);
//     },
//     newprint:()=>{
//           console.log(this);
//     }
// }

// hello.printmetod();
// hello.newprint();
