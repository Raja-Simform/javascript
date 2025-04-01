function print(mood){
 console.log(`${this.name} + ${this.age} + ${mood}`);
}
// function temp(name,age){
//     print.callfunc(this,name);
//     this.age=age;
// }
// const val=new temp("abc",13);
// console.log(val);

const temp={
      name:"abc",
      age:20,
      
}

// Function.prototype.callfunc=function(ref,...args){
//        ref.pthis=this;
//        console.log(ref.pthis);
//        ref.pthis(args);
// }
// print.callfunc(temp,"happy");

Function.prototype.mybind=fucntion(ref,...args){
      const obj=this;
      return function(...args1){
           obj.print.apply(ref,[...args,...args1]);
      }
};
