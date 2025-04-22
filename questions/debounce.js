const input=document.querySelector("input");
const defaultText=document.getElementById("default");
const debounceText=document.getElementById("debounce");
const throttleText=document.getElementById("throttle");

// const updatedebounce=debounce((text)=>{
//     debounceText.textContent=text;
// },1000)
// const updatethrottle=throttle((text)=>{
//         throttleText.textContent=text;
// })
// input.addEventListener("input",(event)=>{
//           defaultText.textContent=event.target.value;
//           updatedebounce(event.target.value);
//           updatethrottle(event.target.value);
// })

function debounce(func,delay){
     let timer;
     return (...args)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>{
              func(...args);
        },delay)
     }
}

// function throttle(func,delay=1000){
//      let flag=false;
//      let wait
//      const timeoutfunc=()=>{
//         if(wait==null){
//             flag=false;
//         }
//         else{
//             func(...wait)
//             wait=null;
//             setTimeout(timeoutfunc,delay);
//         }
//         flag=false;

//      }
//      return(...args)=>{
//         if(flag){
//             wait=args;
//             return;
//          }
//          func(...args);
//          flag=true;
//          setTimeout(timeoutfunc,delay)
         
//      }


// }


