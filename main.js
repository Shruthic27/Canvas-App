var last_position_x = 0;
var last_position_y = 0;
mouse_Event = " ";
var current_position_x = 0;
var current_position_y = 0;
var color = "red";

Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

window.addEventListener("mousemove", mouseMove);
window.addEventListener("mousedown", mouseDown);
window.addEventListener("mouseup", mouseUp);
window.addEventListener("mouseleave", mouseLeave);

function mouseDown(e){
    mouse_Event = "mouseDown";
    console.log("mousedown");
}
function mouseUp(e){
    mouse_Event = "mouseUp";
    console.log("mouseup");
}
function mouseLeave(e){
    mouse_Event = "mouseLeave";
    console.log("mouseleave");
}
function mouseMove(e){
    console.log("mousemove");
    current_position_x = e.clientX-Canvas.offsetLeft;
    current_position_y = e.clientY-Canvas.offsetTop;
    if (mouse_Event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.arc(current_position_x, current_position_y, 40 ,0 , 2*Math.PI);
        ctx.stroke();
    }
    last_position_x = current_position_x;
    last_position_y = current_position_y;
}

function na1(){
    window.location="g2.html"
}
function np1(){
    window.location="g4.html"
}