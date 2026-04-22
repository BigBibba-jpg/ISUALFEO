function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(mouseX,mouseY,mouseX,40);
 line(0,0,mouseX,mouseY);
  line(400,400,mouseX,mouseY);
  line(400,0,mouseX,mouseY);
  line(0,400,mouseX,mouseY);
strokeWeight(mouseY-mouseX);
  if(mouseIsPressed){
  circle(mouseX,mouseY,mouseX-mouseY);
    }
}