const arr=[1,5,1,7,5,4];

  const val=  arr.reduce((acc,curr)=>{ return acc+curr},0);
  console.log(val);

Array.prototype.myreduce=function(clbk,a){
    let sum=0;
    for(let i=0;i<this.length;i++){
        sum=clbk(sum,this[i]);
    }
    console.log(sum);
}  
arr.myreduce((acc,curr)=>{ return acc+curr},0);