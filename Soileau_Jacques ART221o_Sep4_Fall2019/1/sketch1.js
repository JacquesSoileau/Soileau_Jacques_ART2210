function setup(){
 
    createCanvas(windowWidth,windowHeight);
  
 }
  
 function draw(){
   background(255, 0, 0);
   fill(0, 0, 255);
   ellipse(mouseX, mouseY, 80, 80);
 }
 function windowResized(){
   
   resizeCanvas(windowWidth,windowHeight);
 }