// const res = ImmutableList([1, 2, 3])
// .push(4)
// .map(x => x * 2)
// .filter(x => x > 5).push(100)
// .map(x => x + " <-")
// .value()
    
   
    //  ["6 <-", "8 <-", "100 <-"] 
    // 6 8 100
 
 
//  function ImmutableList(arr){
//     let arr1=arr; 
//     obj={
//         push(num){
//             arr1.push(num)
//             return obj;
//         },
//         map(clbk){
//            arr1=arr1.map(clbk)
//            return obj;
//         },
//         filter(clbk){
//           arr1=arr1.filter(clbk);
//           return obj;
//         },
//         value(){
//             return arr1;
//         }


//     }
//     return obj;
       

//  }   

// function ImmutableList(arr){
//     let arr1=arr;
//     function push(num){
//         arr1.push(num);
//         return this;
//     }
//     function map(clbk){
//         arr1=arr1.map(clbk);
//         return this;
//     }
//     function filter(clbk){
//         arr1=arr1.filter(clbk);
//         return this;
//     }
//     function value(){
//         return arr1;
//     }
//     return {
//         push,
//         map,
//         arr1,
//         filter,
//         value
//     }
// }
//  console.log(ImmutableList([1,2,3]).push(4).map(x => x * 2).filter(x => x > 5).push(100).map(x => x + " <-").value())
// console.log(ImmutableList([1,2,3]).push(4).value())


    


function DOMHelper(str){
  const val=document.querySelector(str);
  function hide(){
    val.style.visibility='hidden';
    return this;
  }
  function addClass(str){
        val.classList=str;
        return this;
  }
  function on(event,clbk){
       val.addEventListener(event,clbk);
       return this;
  }
  function css(prop,val){
    val.style.prop=val;
    return this;
  }
  function show(){
    val.style.visibility='vissible';
    return this;
  }
  return{
    val,
    addClass,
    on,
    css,
    hide,
    show
  }
  
}
const element = DOMHelper('#myElement')
.hide()
.addClass('highlight')
.on('click', () => alert('Clicked!'))
.css('color', 'blue')
.show();