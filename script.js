function setup() {
  canvas = createCanvas(800, 500);
  background(0, 187, 255);
  frameRate(10);
}



function draw() {
  noStroke();
  fill('red');
  ellipse(30, 220, 30);
  stroke('green');
  fill('white');
  strokeWeight(10);

}