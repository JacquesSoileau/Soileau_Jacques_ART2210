function setup(){
 
    createCanvas(windowWidth,windowHeight);
    background(0);
    angleMode(DEGREES);
 }
  
 function draw(){
      var s = 0;
		s = second();
		print(s);
         print("the current second is"+s);
      var m = 0;
      m = minute();
      print(m);
         print("the current minute is"+m);
      var h = 0;
      h = hour();
      print(h);
         print("the current hour is"+h);

      background(0);
      translate(windowWidth/2, windowHeight/3);
      rotate(-90);

      let hr = hour();
      let mn = minute();
      let sc = second();

      strokeWeight (7);
      stroke(0);
      ellipse (0, 0, 300, 300);

      push();
      rotate(secondAngle);
      stroke(255, 0, 0);
      line(0, 0, 100, 0);
      pop();

      push();
      rotate(minuteAngle);
      stroke(0, 255, 0);
      line(0, 0, 75, 0);
      pop();

      push();
      rotate(hourAngle);
      stroke(0, 0, 255);
      line(0, 0, 50, 0);
      pop();

      stroke(255);
      point(0, 0);


 }
  
  
 function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    background(0);
    angleMode(DEGREES);
 }
 