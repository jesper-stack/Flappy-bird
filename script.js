var bird
var gameState = 1; 
let number = 0;
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
    image(img, this.x, this.y, 100, 100,);
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
    this.x = width + 10;
    this.y = y;
    this.w = 60;
    this.h = h;
  }


  draw() {
    rect(this.x, this.y, this.w, this.h);
    this.x -= 5;
  }

  checkCollision(){
    // if(x bots en y ook dan maken we de kleur rood. Of eigenlijk ztten we de gamestate op game over)    
    if(bird.x > this.x && bird.x < this.x + this.w){
      if (bird.y < this.h || bird.y > this.h) {
        gamestate = 1;
      }
    }
  //gameState = 2;
  }
}




let img2;
let img;
function preload() {
  img = loadImage("images/transparent.png");
  img2 = loadImage("images/pijp.png");
}

pipes = [];

function setup() {
  canvas = createCanvas(600, 480);
  bg = loadImage("images/images.png");
  bird = new Bird();
}



function draw() {
 text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    menu();
  }

  if (gameState == 1) {
    game();
  }

  if (gameState == 2) {
    gameOver();
  }

}

function keyPressed() {
  if (key === " ") {
    bird.goUp();
  }
}


function menu() {
  background("#ababab");
  text("MENU", 25, 45);
  text("1. menu", 25, 65);
  text("2. start game", 25, 85);
  text("3. game over", 25, 105);
}

function game() {
  background(bg)
  textSize(50);
  text(number, 300, 70, 70, 70);
  fill (0, 0, 0)
  bird.update();
  bird.show();
  if (frameCount % 100 == 15 && frameCount >= 200) {
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
    p.checkCollision();
  })
  //


  
}

function gameOver() {
  background("green");
  text("GAME OVER", 25, 45);
  x = 0;

}