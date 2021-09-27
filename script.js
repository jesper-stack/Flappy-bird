var bird

function setup() {
  canvas = createCanvas(800, 500);
  background(0, 187, 255);
  frameRate(10);
  bird = new Bird();
}

let img;
function preload() {
  img = loadImage("images/transparent.png");
}

function draw() {
  //noStroke();
  fill(255, 230, 0);
  //ellipse(400, 220, 30);
  //stroke('green');
  //fill('white');
  //strokeWeight(10);
  bird.update();
  bird.show();
  //
}

class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = -16;
    this.velocity = 0;
  }

  show () {    
    image(img, this.x,this.y, 100, 100);    
  }

  goUp () {
    this.velocity += this.lift;
    console.log(this.velocity);
  }

  update () {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

     if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

     if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }
}