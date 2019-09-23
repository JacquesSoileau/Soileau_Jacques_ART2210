function setup(){
    createCanvas(windowWidth,windowHeight);
   
 }
  
 function draw(){
    var eyes 
   background(255, 0, 0);
   fill(255, 222, 173);
   rect(435, 525, 160, 160);
   ellipse(windowWidth/2, windowHeight/2, 350, 425);
   fill(139, 69, 19);
   arc(windowWidth/2, windowHeight/3, 300, 200, PI, 0);
   fill(255);
   ellipse(425, 335, 90, 60);
   ellipse(600, 335, 90, 60);
   fill(139, 69, 19);
   ellipse(425, 335, 30, 30);
   ellipse(600, 335, 30, 30);
   fill(0);
   ellipse(425, 335, 20, 20);
   ellipse(600, 335, 20, 20);
   fill(139, 0, 0);
   ellipse(windowWidth/2, 450, 150, 30);
   stroke(0);
   strokeWeight(1);
   line(515, 335, 500, 400);
   line(500, 400, 525, 400);
   line(445, 450, 590, 450);
   fill(0, 191, 255);
   arc(windowWidth/2, 900, 600, 600, PI, 0);



 }
  
  
 function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    
 }
 