
class calculator {
   constructor(val){
     this.val=val;
   }
   add(operator){
      this.val=this.val+operator;
      return this
   }
   subtract(operator){
        this.val=this.val-operator;
        return this;
   }
   multiply(operator){
    this.val=this.val*operator;
    return this;
   }
   value(){
     console.log(this.val);
   }

}
new calculator(100).add(5).multiply(10).subtract(20).add(200).value()

new calculator(20)
.add(15)
.substract()
.value();