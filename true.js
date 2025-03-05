
// function second(){
//     function first(){
//         const a=5;
//         console.log(a);
        
//     }
//     const a=20;
//     return first;
   
// }
// const a=10;
// second()();
// function hello(){
//     for(let i=0;i<10;i++){
//         setTimeout (()=>{
//             console.log(i);
//         },2000);
        
//     }
//     console.log("welcome to javascript" );
// }
// hello();

// function inefficient(index) {
//     const bigArray = new Array(7000).fill("😄");
//     console.log("created!");
//     return bigArray[index];
// }
  
// console.log(inefficient(688));
// console.log(inefficient(100));
// console.log(inefficient(6500));
// function container (){
//     const bigArray = new Array(7000).fill("😄");
//     console.log("created!");
//     function inefficient(index) {
//     return bigArray[index];
//     }
//     return inefficient;

// }
// let solve=container();

// console.log(solve(668));
// console.log(solve(1000));
// console.log(solve(6500));
// const original = { name: "Inshiya", details: { age: 25 } };
// const obj2 = { ...original };
 
// obj2.name = "Test";
// obj2.details.age = 30;
 
// console.log(original.name);         
// console.log(original.details.age);  

 
//  function func4() {
//   console.log(3)
// }
// func4()  
  // console.log(typeof([]+0)) ;
  // let x=10;
  // for(let i=0;i<5;i++) {
  //   let x = i;
  //   console.log(x);
  // }
  // console.log(x);
//  function main(){
//   
//   const obj2 = { ...original };
//   // obj2.name = "Test";
//   // obj2.details.age = 30;
//   // console.log(obj2.name);         
//   // console.log(obj2.details.age);
//   console.log(this);
//  }
// //  function main2(){
// //     const original={};
    
// //  }
//  main() 
  
// function fun1(){
//   const original = { name: "Inshiya", details: { age: 25 } };
//   function fun2(){
//     const obj2 = { ...original };
//     console.log(obj2.name)
//   }
//   fun2();

  
// }  
// fun1();
// let x = 10;  
// function test() {  
//     let x = 20;  
//     console.log(x); 
     
// }  
// test();  
// console.log(x);

  
// function outer(x){
 
//   return function inner(y){
//    let x=4
//    console.log(x+y);
   
//  }
 
// }
// let add = outer(3)


// console.log([1] == 1)
// console.log([1] == '1')
// console.log(['1'] == '1')
// console.log(['1'] == 1)



// function button(){
//   document.getElementById("click").addEventListener("click",()=>{
//     console.log("CLicked")
//   });
  
// }
// button();

 
// confirm("yes")
// console.log([]+{})
// "use strict";
// let s="hello";
// s[0]='p';




// let arr=[1,2,3];
// const logic=(radius)=>{
//    return radius+radius;
// }
// Array.prototype.func=(logic)=>{
//   const output=[];  
//   for(let i=0;i< arr.length;i++){
//     output.push(logic(arr[i]));   
//   }
//   console.log(this)
//   return output;
// }
// console.log(arr.func(logic));



// // console.log(arr.map(logic))
// arr.func(logic);
// arr=[2,5,8,7,9]
// function logic(num){
//   return(num%2);
// }
// const output=arr.filter(logic);
// console.log(output);

// arr=[4,5,8,9,7,6]
// let c=arr.reduce((a,b)=>{
//      if(b>a){
//        a=b;
//      }
//      return a;
    
// },0)
// console.log(c);


// const add = (arg1, arg2) => {
//   return arg1 + arg2;
// };
// const sub=(arg1,arg2)=>{
//   return arg1-arg2;
// };
// const mul=(arg1,arg2)=>{
//   return arg1*arg2;
// };
// function container(func){
//   let map = new Map();
 
//   return function memo(...args){
//     let str=args.toString();
//     if(map.has(str)){
//       console.log(map.get(str));
//     }
//     else{
//        map.set(str,func(...args))
//        console.log(map.get(str));
//     }
    
    
//   }
 
// }
// memoedAdd=container(add);
// memoedSub=container(sub);
// memoedMul=container(mul);
// memoedAdd(1,2);
// memoedAdd(1,2);
// memoedAdd(5,2);
// memoedSub(1,2);
// memoedMul(5,2);

//call
// function func2(age){
//   return this.age=11;
// }
// function func1(name,age){
//    func2.call(this,age);
//    this.name=name;
//    return (name,age);
// }
// let a=new func1("raja",11);
// console.log(a);

//object-enteries,values,enteries
// let prices ={
//   man:4,
//   ban:5,
//   app:7,
//   "guv men":20,
// };
// console.log(Object.entries(prices).map(x=>console.log(x[0],x[1])));
// for(let [key,values] of Object.entries(prices)){
//     console.log(`${key},${values}`);
// }
// let second_max;
// let arr=[5,10,10,15,7];
//  let max=0;
// for (a of arr){
//     if(a > max){
//         second_max = max
//         max = a
//     }
//     else if(second_max < a){
//         second_max = a
//     }
// }
// console.log(second_max)
 
// console.log(prices["guv"]);
// console.log(prices["man"]);
// console.log(prices["guv men"]);




// Array.prototype.getelement=function(index){
//         console.log(`your element at ${index} is ${this.at(index+this.length)}`)
// };
// Array.prototype.setelement=function(index,values){
//   this.fill(values,index+this.length,index+this.length+1);
//   console.log(`your element are ${this}`)
// };
// let arr=[1,2,3,4,5];
// arr.getelement(-1);
// arr.setelement(-4,12);


// let count=0;
// let high=0;
// let second_high=high;
// let arr=[4,8,6,7,6,12,14,2];
// while(count<arr.length){
//      if(arr[count]>high){
//       second_high=high;  
//       high=arr[count];
        
//      }
//      else if(arr[count]>second_high){
//           second_high=arr[count];
//      }
//      count++;
// };
// console.log(high,second_high);



// function $(selector){
//    let el=document.querySelectorAll(selector);
//    for(let item of el){
//       item.style.backgroundColor="#000";
//       item.style.color="#fff";
//       item.style.fontWeight="bold";
//       item.style.fontSize="16px";
//    }
// }


// class ${
//   constructor(selector){
//     this.el=document.querySelector(selector);
//   }
//   css(prop,value){
//     this.el.style[prop]=value;
//     return this;
//   }
// }
// new $("#button")
//     .css("color", "#fff")
//     .css("backgroundColor", "#000")
//     .css("fontWeight", "bold");



//promise 

//create order ,payment ,show order history,update history
// cart=["mango","clothes","apple"]
// createorder(cart)
//   .then(function(orderID){
//        console.log("paymenat sucessful");
//        return orderID;
//   })
//   .catch(function(err){
//      console.log("check cart items");
//   })
//   .then(function(){

//   });

// function validate (cart){
//   return false;
// }
// function createorder(cart){
//    const pr=new Promise(functon(resolve,reject){   
//     if(!validate(cart)){
//          conts err= new Error("add valid item");
//          reject(err);
//        }
//    });
//    return pr;
// }

// class calculator {
//    constructor(val){
//      this.val=val;
//    }
//    add(operator){
//       this.val=this.val+operator;
//       return this
//    }
//    subtract(operator){
//         this.val=this.val-operator;
//         return this;
//    }
//    multiply(operator){
//     this.val=this.val*operator;
//     return this;
//    }
//    value(){
//      console.log(this.val);
//    }

// }
// new calculator(100).add(5).multiply(10).subtract(20).add(200).value()

// new calculator(20)
// .add(15)
// .substract()
// .value();




// function calculator(val){
//  const pr=new Promise(function(resolve,reject){
//       resolve(val);
//  });
// }
// calculator(20).then 



// function chunk(arr,val){
//   let count=0;
//   let ans=[]; 
//   let temp=[];
//   let it=0;
//   while(it<arr.length){
//     temp.push(arr[it])
//     count++;
//     if(count==val){
//       ans.push(temp);
//       count=0;
//       temp=[];
//     }
//     it++;
//   }
//   if(temp.length<val && temp.length!=0){
//     ans.push(temp);
//   }
//   return ans;
// }
// console.log(chunk([1,2,3,4,5],2))
// console.log(chunk([1,2,3,4,5],3))
// console.log(chunk([1,2,3,4,5],4))
