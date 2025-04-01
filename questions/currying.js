
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



const curried = curry(multiply);console.log(curried(2)(5, 2, 2)(2));





// const obj = { name: "Virat kohli", details: { age: 35 } ,};
// console.log(String(obj)); //"[object Object]" 
// console.log(String(obj)); // "Awesome Object"
// console.log(String(obj)); // "Virat Kohli--35"

//   function myFn(){
//     return "returned from my Fn";
//   }

// console.log(myFn); 
// /**
//  * function myFn() {
//     return "returned from my Fn";
// }
//  */


// console.log(myFn);  // "awesome function"