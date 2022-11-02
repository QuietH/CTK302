let cars = [] ;
let frogPos;
let state = 0;
let timer = 0;
let f1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  f1 = loadFont("assets/rajdhani.ttf");
  rectMode(CENTER);
  imageMode(CENTER);

  // Spawn objects

  for (let i = 0 ; i < 4 ; i++) {
    cars.push(new Car()) ;
  }
  
  // initialize the "frog position" vector
  frogPos = createVector(width/2, height-80);
 
}

function draw() {
  switch(state){
    case 0: // menu
      background(100);
      textFont(f1, 48);
      text("Click to Start WOW", width/2 - 200, height/2);
      break;
      
    case 1:
      game();
      timer++;
      if (timer > 10 *60) {
        timer = 0;
        state = 3;
      }
      break;
      
    case 2: // win
      background(100);
      textFont(f1, 48);
      text("you WON WOW", width/2, height/2);
      break;
      
    case 3: // loser
      background(100);
      textFont(f1, 48);
      text("loser", width/2, height/2);
      break;
  }
}


function resetTheGame() {
  
  cars = [];
  
  for (let i = 0 ; i < 4 ; i++) {
  cars.push(new Car()) ;
  }
  timer = 0;
}




function mouseReleased(){
  switch(state) {
    case 0: //menu screen
      state = 1;
      break;
      
      case 2: //win screen
      resetTheGame();
      state = 0;
      break;
      
      case 3: // lose screen
      resetTheGame();
      state = 0;
      break;
  }
}



function game() {
  background("white");
  // operate on every car
   for (let i = 0 ; i < cars.length ; i++) {
     cars[i].display() ;
     cars[i].move() ;
     if(cars[i].pos.dist(frogPos) < 30) {
       cars.splice(i,1);
     }
   }
  
  if (cars.length == 0 ) {
    state = 2;
  }
  
  // add a "frog"
  fill("#green");
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 15;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 15;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 15;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 15;
  
  if(frogPos.x > width) frogPos.x = 0;
  if(frogPos.x < 0) frogPos.x = width;
  if(frogPos.y > height) frogPos.y = 0;
  if(frogPos.y < 0) frogPos.y = height;
}




class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), 100); // initialize your attributes here
    this.velocity = createVector(0, random(1, 5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128) ;
  }
  // methods

  display() {
 
    // this can be text, images, or shapes
    fill(this.r, this.g, this.b, this.o); 
    rect(this.pos.x, this.pos.y, this.size, 25);
    // image(this.img. this.pos.x, this.pos.y);
 
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

