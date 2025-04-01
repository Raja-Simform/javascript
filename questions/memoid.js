const add = (arg1, arg2) => {
  return arg1 + arg2;
};
const sub=(arg1,arg2)=>{
  return arg1-arg2;
};
const mul=(arg1,arg2)=>{
  return arg1*arg2;
};
function container(func){
  let map = new Map();
 
  return function memo(...args){
    let str=args.toString();
    if(map.has(str)){
      console.log(map.get(str));
    }
    else{
       map.set(str,func(...args))
       console.log(map.get(str));
    }
    
    
  }
 
}
memoedAdd=container(add);
memoedSub=container(sub);
memoedMul=container(mul);
memoedAdd(1,2);
memoedAdd(1,2);
memoedAdd(5,2);
memoedSub(1,2);
memoedMul(5,2);