//................................................>GroupBy
// function groupBy(arr,func){
//    const map=new Map();
//    let temp=0;
//    for(let i=0;i<arr.length;i++){
//       temp=func(arr[i]);
//       if(map.has(String(temp))){
//         let newarray=map.get(String(temp));
//         newarray.push(arr[i]);
//         map.set(String(temp),newarray);
//       }
//       else{
//         map.set(String(temp),[arr[i]]);
//       }
//    }
//    console.log(map);
// }
// groupBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);

//...............................................>Compose
// Implement a function compose that takes multiple functions as arguments and returns a new function that applies those functions in reverse order. The output of one function becomes the input of the next function, creating a chain of function compositions.
 
// If there are no functions passed to the compose function, the default behavior is to return a new function that simply returns the input it receives. In other words, the default behavior of compose without any functions results in a simple identity function.
 
// You may assume that all the functions accept a single parameter.
 
// const add1 = (num) => num + 1;
// const double = (num) => num * 2;
// const subtract10 = (num) => num - 10;

// function compose(...args){
//     return function(num){
//      if(args.length===0){
//             return num;
//      }
//      else{
//        let a=args.reverse().reduce((sum,current)=>{
//               return current(sum);      
//       },num)
//       return a;
//      }
//     }
// }
// const composedFn = compose(subtract10, double, add1);
// console.log(composedFn(3))// (3 + 1) * 2 - 10 => -2

//------------------------------------------------------------>CountBy
// Implement a function countBy(array, iteratee) that creates an object composed of keys generated from the results of running each element of array through iteratee. The corresponding value of each key is the number of times the key was returned by iteratee.
 
function countBy(arr,func){
       const obj={};
       for(a in arr){
             let b=func(arr[a]); 
             if( obj[b]){
              obj[b]++;
             }
             else{
              obj[b]=1;
             }
       }
       console.log(obj);
}
countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
 
countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
// => { '3': 2, '5': 1 }

//---------------------->Bind

// const obj={
//   name:"dhruv",
//   age:55,
//   print(){
//     console.log(`my name is ${this.name} & my age is ${this.age}`)
//   }
// }
// const obj2={
//      name:"raja",
//      age:50
// }
// obj.print.bind("raja")();

// Function.prototype.mybind=function(ref,...args){
//   if(ref instanceof Object){
//   let newthis=this;
//   return function(){
//       newthis.call(ref,...args);   
//   }
//   }
// }
// const newprint=obj.print.mybind(obj2)();




