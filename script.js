var bird
var gameState = 0; 
let number = 0;
let bg;
let y = 0;
let highscore = 0;

class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 64;
    this.h = 25;
    this.w = 25;
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
  }

  show() {    
    //rect(this.x, this.y, this.w, this.h);
    image(img, this.x - 38, this.y - 39, this.w + 75, this.h + 75);
  }

  goUp() {
    this.velocity += this.lift;
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
    this.c = "green";
  }


  draw() {
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
    this.x -= 5;
  }

  checkCollision(){
    // if(x bots en y ook dan maken we de kleur rood. Of eigenlijk ztten we de gamestate op game over)    
    if(bird.x > this.x && bird.x < this.x + this.w){
      //this.c = "orange";
      console.log(bird)
      if (bird.y < this.y + this.h && bird.y + bird.h > this.y) {
        //this.c = "red"
       gameState = 2;
      }
    }
    else{
      this.c = "green";
    }
  }
}




let img2;
let img;
function preload() {
  img = loadImage("images/transparent (2).png");
  img2 = loadImage("images/pijp.png");
}

pipes = [];

function setup() {
  canvas = createCanvas(600, 480);
  bg = loadImage("images/images.png");
  bird = new Bird();
  highscore = 0;
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
  background ("lightblue")
  if (keyIsDown(ENTER)) {
    gameState = 1;
  }
  text("Welcome to Flappy Bird!", 25, 45);
  text("Press Enter to start the game.", 25, 75)
  text("Good luck!", 25, 105)
}

function game() {
  background(bg);
  fill (0, 0, 0);
  textSize(50);
  text(number, 300, 70, 70, 70);
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
  }

  pipes.forEach((p) => {
    p.draw();
    p.checkCollision();
  })
   
}

function gameOver() {
  background ("white");
  text("GAME OVER", 25, 45);
  text("Score:" + number, 25 , 120);
  text("Press Enter to play again.", 25, 280)
  fill (0, 0, 0);
  x = 0;
  if(keyIsDown(ENTER)) {
    number = 0;
    p = [];
    pipes = []; 
    frameCount = 0;
    gameState = 1;
  }

}