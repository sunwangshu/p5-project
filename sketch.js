function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  ellipse(200,200,100,100);
  strokeWeight(4);
  arc(200,200,100,100,0,PI/2,PIE);
 
  //rect in beginShape.
  fill(200,10,0);
  beginShape();
  vertex(10,20);
  vertex(10,40);
  vertex(30,30);
  endShape(CLOSE);
 
  //beginShape
  beginShape();
  curveVertex(184,  91);
  vertex(184,  91);
  curveVertex(168,  19);
  vertex(121,  17);
  curveVertex(132, 100);
  endShape(CLOSE);
  
  //color
  colorMode(RGB,100,100,100,50);
  fill(255,255,10,80);
  ellipse(300,300,50,50);
  
  //view source: to get code.
  
  //translate, change the (0,0)point
  rect(0, 0, 55, 55);  // Draw rect at original 0,0
  translate(30, 20);
  rect(0, 0, 55, 55);  // Draw rect at new 0,0
  translate(14, 14);
  rect(0, 0, 55, 55);  // Draw rect at new 0,0
  
}