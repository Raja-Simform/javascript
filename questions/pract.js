// function get(obj,str){
//     let arr=str.split('.');
//     // let val=structuredClone(obj);
//     for(let a of arr){
//        obj=obj[a];    
//     }
//     return obj;
// }


// const obj = {
//     a: {
//       b: {
//         c: [10, 11, 12],
//       },
//       d:"awesome"
//     },
//   };
   
// console.log( get(obj,"a.b.c") )// [1,2,3]
//   console.log(get(obj,"a.d") )// "awesome"
//  console.log( get(obj,"a.b.c.1")) // 11



// function change(obj,str,value){
//        let pos=str.split('.');
//        let a=obj;
//        for(let i=0;i<pos.length-1;i++){
//           obj=obj[pos[i]];
          
//        }
//        obj[pos[pos.length-1]]=value;
//        return a;
       
// }

// const obj1=change(obj,"a.b.c",[77,88,99]);
// console.log(obj1);

//---------------->
// const obj = {
//   a: {
//     b: {
//       c: [10, 11, 12],
//     },
//     d: "awesome",
//   },
// };

// function getKey(obj, path = "",returnobj={}) {
  
//   for (const a in obj) {
    
//       const tempPath = path ? `${path}.${a}` : a;
//       const value = obj[a];

//       if (typeof value === "object" && value !== null) {
//         getKey(value, tempPath,returnobj); 
//       } else {
//         returnobj[tempPath]=value; 
//       }
    
//   }
//   return returnobj;
// }

// console.log(getKey(obj));

//----------------------->
// input:
// const obj={
//   "a.b": 2,
//   "a.d.c":[1,2,3],
//   }
  
//   function setKeys(obj){
//     const ans={}; 
//     for(let key in obj){
         
//           let keys=key.split('.');
//           let tempobj=ans;
//           for(let b=0;b<keys.length-1;b++){
//              if(!tempobj[keys[b]]){
//               tempobj[keys[b]]={}
//              }
//              tempobj=tempobj[keys[b]];        
//           }
//           tempobj[keys[keys.length-1]]=obj[key];
         
//     }
//     return ans;
  
//   }
//   console.log(setKeys(obj))
// output:
// const obj = {
// a:{
//    b:2
// }
// }


// given: "20", output: number of keys with value as 20 in the given object

// const obj={
//   a:20,
//   b:20,
//   c:{
//     d:20,
//     e:{
//       f:20
//     }
//   }
// }
// function counting(obj,count=0){
//   for(let a in obj){
//     if(obj[a]===20){
//         count++;
//     }
//     else{
//       count=counting(obj[a],count);
//     }
//   }
//   return count;
// }

// console.log(counting(obj))

const treasureMap = {
  beach: "empty",
  cave: {
    entrance: "empty",
    tunnel: {
      end: "treasure",
      side: "empty"
    },
    chamber: "treasure"
  },
  forest: {
    clearing: "empty",
    river: "treasure"
  },
  mountain: "empty"
};

//  find all treasure paths
function find(obj,ans=[],path=""){
        for(let a in obj){
          
          if(obj[a]!=="treasure" && typeof(obj[a])==="object"){
            
            ans=find(obj[a],ans,path+a+'-->');
          }
          else if(obj[a]==="treasure"){
            
            ans.push(path+a);
          }
        }
        return ans;
}
console.log(find(treasureMap));
 

