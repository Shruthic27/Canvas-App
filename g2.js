var last_position_x = 0;
var last_position_y = 0;
mouse_Event = " ";
var current_position_x = 0;
var current_position_y = 0;

Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

window.addEventListener("mousemove", mouseMove);
window.addEventListener("mousedown", mouseDown);
window.addEventListener("mouseup", mouseUp);
window.addEventListener("mouseleave", mouseLeave);
window.addEventListener("touchmove", touchMove);
window.addEventListener("touchstart", touchStart);

width = screen.width;
height = screen.height;
    if (width < 992) {
        document.getElementById("myCanvas").width = width - 70;
        document.getElementById("myCanvas").height = height - 300;
    }

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
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    }
    last_position_x = current_position_x;
    last_position_y = current_position_y;
}
function touchStart(e){
    last_touch_x = e.touches[0].clientX - Canvas.offsetLeft;
    last_touch_y = e.touches[0].clientY - Canvas.offsetTop;
}
function touchMove(e){
    console.log("mousemove");
    current_touch_x = e.touches[0].clientX-Canvas.offsetLeft;
    current_touch_y = e.touches[0].clientY-Canvas.offsetTop;

    ctx.beginPath();
    ctx.moveTo(last_touch_x, last_touch_y);
    ctx.lineTo(current_touch_x, current_touch_y);
    ctx.stroke();
    last_touch_x = current_touch_x;
    last_touch_y = current_touch_y;
}

function na2(){
    window.location="g3.html"
}
function np2(){
    window.location="index.html"
}