var bird
let number = '0';
let bg;
let y = 0;

class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
  }

  show() {
    image(img, this.x, this.y, 100, 100);
  }

  goUp() {
    this.velocity += this.lift;
    console.log(this.velocity);
  }

  update() {
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

class Pipe {
  constructor(y, h) {
    this.x = width + 50;
    this.y = y;
    this.w = 30;
    this.h = h;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
    this.x -= 5;
  }
}


let img;
function preload() {
  img = loadImage("images/transparent.png");

}

pipes = [];

function setup() {
  canvas = createCanvas(600, 480);
  bg = loadImage("images/images.png");
  bird = new Bird();
}



function draw() {
  background(bg)
  textSize(50);
  text(number, 300, 70, 70, 70);
  //noStroke();
  fill(0, 0, 0);
  //ellipse(400, 220, 30);
  //stroke('green');
  //fill('white');
  //strokeWeight(10);
  bird.update();
  bird.show();
  if (frameCount % 100 == 0 && frameCount >= 200) {
    number++;
  }
  if (frameCount % 100 == 0) {
    
    let randomHeight = random(height - 120)

    pipes.push(new Pipe(0, randomHeight));
    pipes.push(new Pipe(randomHeight + 100, 400));

    if(pipes.length > 8){
      pipes.splice(0,2);
    }

    console.log(pipes);
  }

  pipes.forEach((p) => {
    p.draw();
  })
  //

  if(this.x < 100 + 80 && this.x + 50 > 100){
    if(this.y < 100 + 30 && this.y + 50 > 100){
    }
  }

}

function keyPressed() {
  if (key === " ") {
    bird.goUp();
  }
}

