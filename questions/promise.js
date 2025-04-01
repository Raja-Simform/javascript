
// promise 

// create order ,payment ,show order history,update history
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


// async function async1(){
//   console.log(1)  
//   await async2() 
//   console.log(2)  
// }

// async function async2(){
//   console.log(3) 
// }

//  console.log(4)

// setTimeout(function(){
//   console.log(5) 
// }, 0)

// await async1() 

// new Promise(function(resolve){
//   console.log(6)  
//   resolve()  
// }).then(function(){ 
//   console.log(7)  
// })

// console.log(8)





/**************Promise_All**********/
// async function Promise_all(args){
//     return new Promise((resolve,reject)=>{
//       let count=0;
//       let arr=[];
//       if(args.length===0){
//           reject([]);
//       }
//       const obj={
//         status:"pending",
//         value:undefined,
//       }
//       args.forEach((p,index) =>{
//           p.then((data)=>{
//               obj.status="Fullfilled"
//               obj.value=data;
//               arr[index]=obj;
//               count++;
//               if(count===args.length){
//                   resolve(arr);
//               }
//           })
//           .catch((error)=>{
//               count++;
//               reject(error);
//           })
          
//       });
//     })
//   }
  
//   const p1=new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//            reject(new Error)
//       },5000)
//   });
//   const p2=new Promise((resolve)=>{
//      setTimeout(()=>{
//           resolve("world")
//      },2000)
//   });
//   const p3=new Promise ((resolve)=>{
//      setTimeout(()=>{
//           resolve("123")
//      },1000)
//   });

//   Promise_all([p1,p2,p3]).then((data)=>{
//       console.log(data);
//   }).catch((error)=>{
//          console.log(error);
//   })

//   Promise.all([p1,p2,p3]).then((data)=>{
//     console.log(data);
//   }).catch((error)=>{
//        console.log(error);
//   })



// /**************Promise_All_Settled**********/

// async function Promise_all_settled(args){
//     return new Promise((resolve,reject)=>{
//       let count=0;
//       let arr=[];
//       if(args.length===0){
//           reject([]);
//       }
//       let obj={
//         status:"Pending",
//         value:undefined,
//       }
//       args.forEach((p,index) =>{
//           p.then((data)=>{
//               obj.status="fullfilled";
//               obj.value=data;
//               arr[index]={...obj};
              
//               count++;
//               if(count===args.length){
//                   resolve(arr);
//               }
//           })
//           .catch((error)=>{
//               obj.status="rejected";
//               obj.value=error; 
//               arr[index]={...obj};

//               count++;
//               if(count==args.length){
//                 reject(arr);
//               }
//           })
          
//       });
//     })
//   }
  
//   const p1=new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//            resolve("hello")
//       },5000)
//   });
//   const p2=new Promise((resolve)=>{
//      setTimeout(()=>{
//           resolve("world")
//      },2000)
//   });
//   const p3=new Promise ((resolev,reject)=>{
//      setTimeout(()=>{
//           reject(new Error)
//      },1000)
//   });


//   Promise_all_settled([p1,p2,p3]).then((data)=>{
//       console.log(data);
//   }).catch((error)=>{
//          console.log(error);
//   })
  
// Promise.allSettled([p1,p2,p3]).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//    console.log(error);
// })
  
// /***********Promise_Race********/

// async function Promise_race(args){
//   return new Promise((resolve,reject)=>{
//     args.forEach((p) => {
//       p.then((data)=>{
//           resolve(data);
//       }).catch((error)=>{
//            reject(error)
//       })
// });
//   })
// }
// const p1=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//    reject("hello")
// },1000)
// });
// const p2=new Promise((resolve)=>{
// setTimeout(()=>{
//   resolve("world")
// },2000)
// });
// const p3=new Promise ((resolve,reject)=>{
// setTimeout(()=>{
//   reject(new Error)
// },10000)
// });
// Promise_race([p1,p2,p3]).then((data)=>{
// console.log(data);
// }).catch((error)=>{
// console.log(error);
// })


// /******************Promise_any*********************/

// async function Promise_any(args){
//           return new Promise((resolve,reject)=>{
//             let arr=[];
//             let count=0;
//             args.forEach((p,index) => {
//               p.then((data)=>{
//                   resolve(data);
//               }).catch((error)=>{
//                    count++;
//                    arr[index]=error;
//                    if(count===args.length){
//                     reject(arr);
//                    }
//               })
//             });
//           })
// }
//   const p1=new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//            resolve("hello")
//       },1000)
//   });
//   const p2=new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//           reject("world")
//      },2000)
//   });
//   const p3=new Promise ((resolve,reject)=>{
//      setTimeout(()=>{
//           reject("error")
//      },10000)
//   });

// Promise_any([p1,p2,p3]).then((data)=>{
//   console.log(data);
// }).catch((error)=>{
//   console.log(error);
// })

// Promise.any([p1,p2,p3]).then((data)=>{
//   console.log(data);
// }).catch((error)=>{
//   console.log(error);
// })
// async function getProducts(){
//     const response = await fetch('https://dummyjson.com/products')
//     const res = await response.json()
//       console.log(res)
//     // return products
// }



  // const p1=new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //          resolve("hello")
  //     },1000)
  // });
  // const p2=new Promise((resolve,reject)=>{
  //    setTimeout(()=>{
  //         reject("world")
  //    },2000)
  // });
  // const p3=new Promise ((resolve,reject)=>{
  //    setTimeout(()=>{
  //         reject("error")
  //    },10000)
  // });
 
  // const val=p1.then((data)=>{
  //     console.assert.log(data);
  //     p2();
  // })

  // async function solve(p){
  //     return new Promise((resolve,reject)=>{
  //       p.then((data)=>{
  //         console.log(Date.UTC)
  //         resolve(data);
  //      })
  //      .catch((error)=>{
  //       console.log(Date.UTC)
  //              reject(error);
              
  //      })
  //     })
  // }
  // let arr=[p1,p2,p3];
  //  for(let i=0;i<arr.length;i++){
  //     if(solve(arr[i])){
  //       console.log(`executed ${i}`);
  //       console.log(Date.UTC)
  //     }
  //  }


  // solve([p1,p2,p3]);
// let count=0;
//  function recursive(count,arr){
//     arr[count].then((resolve)=>{
//        resolve(arr[count++])
//     }).ca
//  }










