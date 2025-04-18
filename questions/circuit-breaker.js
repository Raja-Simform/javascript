

function circuitBreaker(func,count,timer){
    let num=0;   
    let flag=false;
    let time=0;
    return function (){
        return new Promise((resolve, reject) => {
            if(flag){
                if(Date.now()-time<=timer){
                    reject("unavailable");
                }
                else{
                     flag=false;
                     num=0;
                }
            }
            console.log(flag);
            function again(){
                func()
                .then((result)=>{
                   num=0; 
                   resolve(result);
                })
                .catch((error)=>{
                      num++;
                      if(num<count){ 
                       again();
                      }
                      else{
                         flag=true;
                         time=Date.now();
                         reject("circuit open",count);
                      }
                })
           }
           again();
        })
    }
}

function myFn(){
    let val=0;
    return function(){
        return new Promise((res,rej)=>{
            if(val>1){
                val++;
                   res("done---func");
            }
            else{
                val++;
              rej("do--again");
            }

        })
    }
}
const temp=myFn();
const breaker=circuitBreaker(temp,2,3000);

breaker().then(console.log).catch(console.log);
// breaker().then(console.log).catch(console.log);
// breaker().then(console.log).catch(console.log);

setTimeout(()=>{
breaker().then(console.log).catch(console.log);
},2000);

setTimeout(()=>{
    breaker().then(console.log).catch(console.log);
},4900)