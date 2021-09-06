var myCanvas = document.getElementById("c1")
ctx = myCanvas.getContext("2d")
var girlwidth = 150
var girlheight = 140
var girlx = 300
var girly = 500
var bg = "racing.jpg"
var c = "p1.png"
function add() {
    background_image = new Image()
    background_image.onload = bgo;
    background_image.src = bg
    girl1_image= new Image()
    girl1_image.onload = go;
    girl1_image.src = c
    girl2_image= new Image()
    girl2_image.onload = go2;
    girl2_image.src = c2
}
var girlwidth2 = 150
var girlheight2 = 140
var girlx2 = 400
var girly2 =500
var bg2 = "racing.jpg"
var c2 = "p2.png"

function bgo() {
    ctx.drawImage(background_image, 0, 0, c1.width, c1.height)
}
function go() {
    ctx.drawImage(girl1_image, girlx, girly, girlwidth, girlheight)
}
function go2() {
    ctx.drawImage(girl2_image, girlx2, girly2, girlwidth, girlheight)
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e) {
    keypress = e.keyCode
    if (keypress == 38) {
        up()
        console.log("up")
    }
    if (keypress == 40) {
        down()
        console.log("down")
    }
    if (keypress == 37) {
        left()
        console.log("left")
    }
    if (keypress == 39) {
        console.log("right")
        right()
    }
    keypress = e.keyCode
    if (keypress == 87) {
        up2()
        console.log("up")
    }
    if (keypress == 83) {
        down2()
        console.log("down")
    }
    if (keypress == 65) {
        left2()
        console.log("left")
    }
    if (keypress == 68) {
        right2()
        console.log("right")
    }
    console.log()
    if (girly<=0) {
        var win= document.getElementById("GS").innerHTML
        document.getElementById("GS").innerHTML = "Girl1 won"
    }
    if (girly2<=0) {
    var win= document.getElementById("GS").innerHTML
    document.getElementById("GS").innerHTML = "Girl2 won"
}  
}
   
function up() {
    if (girly>=0) {
        girly=girly-10
       bgo()
       go()
       go2()
    } 
 }
 function down() {
     if (girly<=500) {
        girly=girly+10
        bgo()
        go()
        go2()
     } 
  }
  function left() {
     if (girlx>=0) {
        girlx=girlx-10
        bgo()
        go()
        go2()
     } 
  }
  function right() {
     if (girlx<=700) {
        girlx=girlx+10
        bgo()
        go()
        go2()
     } 
 }
 function up2() {
    if (girly2>=0) {
        girly2=girly2-10
       bgo()
       go()
       go2()
    } 
 }
 function down2() {
     if (girly2<=500) {
        girly2=girly2+10
        bgo()
        go()
        go2()
     } 
  }
  function left2() {
     if (girlx2>=0) {
        girlx2=girlx2-10
        bgo()
        go()
        go2()
     } 
  }
  function right2() {
     if (girlx2<=700) {
        girlx2=girlx2+10
        bgo()
        go()
        go2()
     } 
 }



 function na3(){
    window.location="g4.html"
}
function np3(){
    window.location="g2.html"
}