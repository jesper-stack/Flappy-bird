function setup() {
  canvas = createCanvas(800, 500);
  background(0, 187, 255);
  frameRate(10);
}

let img;
function preload() {
  img = loadImage("images/transparent.png");
}


function draw() {
  //noStroke();
  //fill(255, 230, 0);
  //ellipse(400, 220, 30);
  //stroke('green');
  //fill('white');
  //strokeWeight(10);
  image(img,20,160,100,100)
}

function Bird(){
  this.y = height / 2
  this.x = 64
  this.gravity = 0.6
  this.lift = -16
  this.velocity = 0
  
  this.show = function(){
    fill(255)
    ellipse(this.x, this.y, 32, 32 )
  }
  
  this.goUp = function(){
    this.velocity += this.lift
    console.log(this.velocity)
  }
  
  this.update = function(){
    this.velocity += this.gravity
    this.velocity *= 0.9
    this.y += this.velocity
    
    if (this.y > height) {
      this.y = height
      this.velocity = 0
    }
    
    if (this.y < 0) {
      this.y = 0
      this.velocity = 0
    }
    
  }
  
}