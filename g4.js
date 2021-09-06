var c1=new fabric.Canvas("canvas1")
var playerx=10
var playery=10
var blockwidth=30
var blockheight=30
var playerobject=""
var blockobject=""
function player(){
    fabric.Image.fromURL("player.png",function (Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({top:playery,left:playerx});
        c1.add(playerobject)
    })
}
function block(blocks){
    fabric.Image.fromURL(blocks,function (Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({top:playery,left:playerx});
        c1.add(blockobject)
    })
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keypress=e.keyCode
    if (keypress==38) {
      up() 
      console.log("up") 
    }
    if (keypress==40) {
        down() 
        console.log("down") 
      }
      if (keypress==37) {
        left() 
        console.log("left") 
      }
      if (keypress==39) {
        right() 
        console.log("right") 
      }
      if (keypress==67) {
        block("cloud.jpg") 
        console.log("c") 
      }
      if (keypress==68) {
        block("dark_green.png") 
        console.log("d") 
      }  
      if (keypress==71) {
        block("ground.png") 
        console.log("g") 
      }
      if (keypress==76) {
        block("light_green.png") 
        console.log("l") 
      }
      if (keypress==82) {
        block("roof.jpg") 
        console.log("r") 
      }
      if (keypress==84) {
        block("trunk.jpg") 
        console.log("ct") 
      }
      if (keypress==85) {
        block("unique.png") 
        console.log("u") 
      }
      if (keypress==87) {
        block("wall.jpg") 
        console.log("w")
      } 
      if (keypress==89) {
        block("yellow_wall.png") 
        console.log("y") 
      }
      if (e.shiftKey && keypress==77) {
        blockwidth= blockwidth-10
        blockheight=blockheight-10
        document.getElementById("w").innerHTML=blockwidth
        document.getElementById("h").innerHTML=blockheight
        console.log("m") 
      }
      if (e.shiftKey && keypress==80) {
        blockwidth= blockwidth+10
        blockheight=blockheight+10
        document.getElementById("w").innerHTML=blockwidth
        document.getElementById("h").innerHTML=blockheight
        console.log("m") 
      }

}
function up(){
if (playery>0) {
  playery=playery-blockheight
  c1.remove(playerobject)
player()
}
}
function down(){
  if (playery<400) {
    playery=playery+blockheight
    c1.remove(playerobject)
player()
  }   
}
function left(){
  if (playerx>0) {
    playerx=playerx-blockwidth
    c1.remove(playerobject)
  player()
  }   
}
function right(){
  if (playerx<650) {
    playerx=playerx+blockwidth
    c1.remove(playerobject)
  player()
  }    
}
function na4(){
  window.location="index.html"
}
function np4(){
  window.location="g3.html"
}