//Typw-1

// function curry(func){
//        const arr=[];
//         const f1=((...args)=>{
//             arr.push(...args);
//             console.log(arr);
//             if(arr.length===func.length){
//               return func(...arr);
//             }
//             else{
//               return f1;
//             }
            
//         })
//         return f1;
// }

// function multiply(a, b, c,d,e) {
//     return a * b * c*d*e;
// }
// const curriedMultiply = curry(multiply);
// console.log(curriedMultiply);
// console.log(curriedMultiply(2, 3, 4));

// console.log(curriedMultiply(2)(3)(4)); 
// console.log(curriedMultiply(2, 3)(4)(5,6)); 
// console.log(curriedMultiply(2,3)); 


//type-2

function curry(fn){
    let arr=[];
    const func=(...args)=>{
         if(args.length>0){
            arr.push(...args);
            return func;
         }
         else{
            let sum= fn(...arr);
            func.toString()=function(){
                return `${sum}`;
            }
            
         }

    };
    
    return func;
}

function multiply(...args){
    let sum=1;
    for(let i=0;i<args.length;i++){
        sum*=args[i];
    }
    return sum;
}

const curried = curry(multiply);
// const new1=curried(2)(5, 2, 2)(2);
// // console.log(new1);
console.log(curried(2)(3)(4)); 
// console.log(curried(2, 3)(4)(5,6)); 
// console.log(curried(2,3)); 


// Type 3

// const obj = { name: "Virat kohli", details: { age: 35 } ,};
// obj.toString=function(){
//             return`${this.name}--${this.details.age}`;
    
// }
// console.log(String(obj));
// console.log(String(obj));
// console.log(String(obj));
// String(obj); // "Awesome Object"
// console.log(String(obj)); // "Virat Kohli--35"



// function myFn() {
//     return "returned from my Fn";
// }

// myFn.toString=function(){
//     return `awesome function`
// }
// console.log(String(myFn));  // "awesome function"



// const obj = {
//     a: {
//       b: {
//         c: [10, 11, 12],
//       },
//       d:"awesome"
//     },
//   };
   
// function get(obj,str){
//     let arr=str.split('');
//     let val=obj;
//     for(let i=0;i<arr.length;i++){ 
//         if(arr[i]==='.'||arr[i]==='['||arr[i]===']'){
//             continue;
//         }
//         val=val[arr[i]];
//         if(val===undefined){
//             console.log("null");
//             return;
//         }
//     }
//     console.log(val);
// }  
//   get(obj,"d.d.d") // [10,11,12]
//   get(obj,"a.d") // "awesome"
//   get(obj,"a.b.c.1") 
//   get(obj,"a[b][c][2]");
