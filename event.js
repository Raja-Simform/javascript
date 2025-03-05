let box_loc=document.getElementsByClassName(".box");
box_loc.addEventListener('click',(event)=>{
    handler(event); 
})
let ball_loc=document.getElementById("#ball");
function handler(event){
        //  ball_loc.clientX=event.clientX;
        //  ball_loc.clientY=event.clientY;
        let left = event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth/2;
}
