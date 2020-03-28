

var snake;
var value = 20;
var food;
var w;
var h;
var bg;
var up = new Audio();
var right = new Audio();
var left = new Audio();
var down = new Audio();

up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

function preload(){
bg = loadImage("image/bg.png");
}

function setup() {
  createCanvas(608,608);
  w = floor(width / value);
  h = floor(height / value);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.changeDirection(-1, 0);
    left.play();
  } else if (keyCode === RIGHT_ARROW) {
    snake.changeDirection(1, 0);
    right.play();
  } else if (keyCode === DOWN_ARROW) {
    snake.changeDirection(0, 1);
    down.play();
  } else if (keyCode === UP_ARROW) {
    snake.changeDirection(0, -1);
    up.play();
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(value);
  background(bg);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.display();


  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}


function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);

}