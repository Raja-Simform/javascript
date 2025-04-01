let count=0;
let maxi=0;
let str="(1+(2*3)+((8)/4))+1";
for(let s of str){
    if(s==='('){
       count++;
       maxi=count>maxi?count:maxi;
    }
    else if(s===')'){
        count--;
        if(count<0){
            console.log("wrong");
            return;
        }
    }
}
if(count===0){
    console.log(maxi);
}