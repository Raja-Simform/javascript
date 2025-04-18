let box_loc=document.getElementById("box");
box_loc.addEventListener('click',()=>{
    handler(); 
})
let ball_loc=document.getElementById("ball");
function handler(){
        //  ball_loc.clientX=event.clientX;
        //  ball_loc.clientY=event.clientY;
        // let left = event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth/2;
        ball_loc.style.left=Math.round(box_loc.clientWidth/2-ball_loc.offsetWidth/2)+'px';
        ball_loc.style.top=Math.round(box_loc.clientHeight/2-ball_loc.offsetHeight/2)+'px';
       
}


