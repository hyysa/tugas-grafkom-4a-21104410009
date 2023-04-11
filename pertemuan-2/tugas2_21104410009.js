function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(221, 160, 221);
  
  translate(50,0);
  fill(15,50,120);
  triangle(50, 20, 250, 20, 150, 160);
  
  translate(85,0);
  fill(20,125,80)
  rect(30, 20, 70, 70);
  
  translate(15,5);
  fill(255,215,0);
  circle(50, 50, 40);
  
  fill(255,255,0)
  translate(-8,140);
  beginShape(TRIANGLE_FAN);
  vertex(57.5, 50);
  vertex(57.5, 15);
  vertex(92, 50);
  vertex(57.5, 85);
  vertex(22, 50);
  vertex(57.5, 15);
  endShape();
  
  translate(-3,18)
  fill(237, 34, 93);
  beginShape(TRIANGLE_STRIP);
  vertex(30, 35);
  vertex(40, 20);
  vertex(50, 35);
  vertex(60, 20);
  vertex(70, 35);
  vertex(80, 20);
  vertex(90, 35);
  endShape();
}