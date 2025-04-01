Array.prototype.myfilter=function(clbk){
      let arr=[];
      console.log(this);
      for(let i=0;i<this.length;i++){
           if(clbk(this[i])){
             arr.push(this[i]);
           }
      }
      return arr;
}
let val=[1,2,3,5,4,8,7,5,98].myfilter((age)=>{
    if(age>20){
        return true;
    }
})
// console.log(val);
// console.log(Array.prototype)
// console.log(Array.__proto__)
// console.log(Array.__proto__.__proto__)

