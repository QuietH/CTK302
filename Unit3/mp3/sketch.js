let cars = [] ;
let frogPos;
let state = 0;
let timer = 0;
let boomtime = 0;
let f1;
var boom;

let i1, i2, i3;

let s1, s2, s3;

let fade = 0;

function preload() {
  img = loadImage("assets/boom.gif");
  boom = createImg("assets/boom.gif");
  boom.position(0,0);
  boom.hide();

  img2 = loadImage("assets/no.gif");
  no = createImg("assets/no.gif");
  no.position(0,0);
  no.hide();

  img3 = loadImage("assets/cat.gif");
  cat = createImg("assets/cat.gif");
  cat.position(0,0);
  cat.hide();

  img4 = loadImage("assets/neco.gif");
  neco = createImg("assets/neco.gif");
  neco.position(0,0);
  neco.hide();

  img5 = loadImage("assets/move.gif");
  move = createImg("assets/move.gif");
  move.position(0,0);
  move.hide();

  s1 = loadSound("assets/bam.mp3");
  s2 = loadSound("assets/paint.mp3");
  s3 = loadSound("assets/over.mp3");
  s4 = loadSound("assets/win.mp3");
  s5 = loadSound("assets/rave.mp3");
}



function setup() {
  createCanvas(800, 800);
  f1 = loadFont("assets/rajdhani.ttf");
  rectMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);

  i1 = loadImage("assets/goo.png");
  i2 = loadImage("assets/dam.png");
  i3 = loadImage("assets/dam2.png");
  i4 = loadImage("assets/end.jpg");

  let bird = random([i2, i3]);

  // Spawn objects

  for (let i = 0 ; i < 40 ; i++) {
    cars.push(new Car()) ;
  }
  
  // initialize the "frog position" vector
  frogPos = createVector(width/2, height-80);
 
}

function draw() {
  switch(state){
    case 0: // menu
      background("black");
      textFont(f1, 80);
      push();
      fill("white");
      text("Goombud's Wrath", width/2 - 290, height/2 - 100);
      pop();

      textFont(f1, 50);
      fill("white");
      fill(fade);
      text("The 1973 Event Recreated", width/2 - 260, height/2 );

      if (fade < 255) fade++;

      if (!s2.isPlaying()){
        s2.play();
      }
      s2.setVolume(.3);
      if (s5.isPlaying()){
        s5.stop();
      }
      no.hide();
      cat.hide();
      neco.hide();
      move.hide();
      break;
      
    case 1:
      game();
      timer++;
      if (timer > 30 *60) {
        timer = 0;
        state = 3;
      }
      if (s2.isPlaying()){
        s2.stop();
      }
      if (!s5.isPlaying()){
        s5.play();
      }
      s2.setVolume(.3);
      if (s4.isPlaying()){
        s4.stop();
      }
      if (s3.isPlaying()){
        s3.stop();
      }
      break;
      
    case 2: // win
      boom.hide();
      background("black");
      textFont(f1, 80);
      fill("white");
      text("Absolute Victory", width/2 - 250, height/2);
      if (s5.isPlaying()){
        s5.stop();
      }
      if (s2.isPlaying()){
        s2.stop();
      }
      if (s1.isPlaying()){
        s1.stop();
      }
      if (!s4.isPlaying()){
        s4.play();
      }
      s4.setVolume(.3);

      neco.show();
      neco.position(420, 500);
      neco.size(200,200);

      move.show();
      move.position(220, 500);
      move.size(200,200);
      break;
      
    case 3: // loser
      boom.hide();
      background("black");
      textFont(f1, 80);
      fill("white");
      text("Devastation", width/2 - 200, height/2);
      if (s5.isPlaying()){
        s5.stop();
      }
      if (s2.isPlaying()){
        s2.stop();
      }
      if (!s3.isPlaying()){
        s3.play();
      }
      no.show();
      no.position(220, 500);
      no.size(200,200);

      cat.show();
      cat.position(420, 500);
      cat.size(200,200);
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
  image(i4, 0 , 0 , 2100, 2100);
  // operate on every car
   for (let i = 0 ; i < cars.length ; i++) {
     cars[i].display() ;
     cars[i].move() ;
     if(cars[i].pos.dist(frogPos) < 50) {
       cars.splice(i,1);
       boom.show();
       if(!s1.isPlaying()){
        s1.play();
        s1.setVolume(.3);
       }
       boom.position(frogPos.x - 40, frogPos.y - 30);
       boom.size(100,100);
     }
   }
  
  if (cars.length == 0 ) {
    state = 2;
  }
  
  // add a "frog"
  image(i1, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();
}



function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 7;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 7;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 7;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 7;
  
  if(frogPos.x > width) frogPos.x = 0;
  if(frogPos.x < 0) frogPos.x = width;
  if(frogPos.y > height) frogPos.y = 0;
  if(frogPos.y < 0) frogPos.y = height;
}




class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), 100); // initialize your attributes here
    this.velocity = createVector(random(-7, 8), random(-7, 8));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(70, 128) ;
  }
  // methods

  display() {
 
    // this can be text, images, or shapes
   // fill(this.r, this.g, this.b, this.o); 
    image(i2, this.pos.x, this.pos.y, this.size, 100);
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

