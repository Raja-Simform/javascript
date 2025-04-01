let arr=[1,5,6,4,3];
// arr.map((val)=>{
//   console.log(val);
// })
Array.prototype.mymap=function(clbk){
    for(let i=0;i<this.length;i++){
        clbk(this[i]);
    }
}
arr.mymap((val)=>{
      console.log(val);
})