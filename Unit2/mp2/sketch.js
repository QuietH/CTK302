let xmovespeed, widthmin, widthmax, offset = 0, ymovement = 10, angle, xmovement;
let state = 0;
let timer = 0;
let i1, i2, i3, i4, i5, i6, i7, i8 ;

let s1, s2, s3, s4 ;

let f1;
let cloudm = 0;
let cloudmb = 0;
let movin = 0;

var boom;

let y = 0;

let growx = 200;
let growy = 200;

let growingx = 260;
let growingy = 400;

//for the moving one
let growingx2 = 800;
let growingy2 = 300;

let growx2 = 200;
let growy2 = 200;

let fade = 0;
let fade2 = 0;
let fade3 = 0;

function preload() {
  img = loadImage("assets/boom.gif");
  boom = createImg("assets/boom.gif");
  boom.position(0,0);
  boom.hide();

  img = loadImage("assets/move.gif");
  move = createImg("assets/move.gif");
  move.position(0,0);
  move.hide();

  s1 = loadSound("assets/fort.mp3");
  s2 = loadSound("assets/bam.mp3");
  s3 = loadSound("assets/mozart.mp3");
  s4 = loadSound("assets/cow.mp3");
}



function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  widthmin = 100;
  widthmax = 700;
  xmovespeed = 12;
  f1 = loadFont("assets/rajdhani.ttf");

  i1 = loadImage("assets/cloud.png");
  i2 = loadImage("assets/cloud2.png");
  i3 = loadImage("assets/cloud3.png");
  i4 = loadImage("assets/cloud4.png");
  i5 = loadImage("assets/grass.png");
  i6 = loadImage("assets/goo.png");
}

function draw() {

  switch (state) {

    case 0:
      background("black");
      move.hide();
      fill(fade);
      textFont(f1, 48);
      text("A Dream You Had Last Night", 120, 200 );



      if (fade < 255) fade ++;
      timer++;
      if (timer > 4 * 60) {
        timer = 0;
        state = 1;
      }

      break;

    case 1:
      background("black");
      move.hide();
      fill("white");
      textFont(f1, 48);
      text("A Dream You Had Last Night", 120, 200 );
      push();
      fill(fade2);
      textFont(f1, 30);
      text("A Carefully Crafted Experience\n               by Hamza", 200, 300 );
      pop();


      if (fade2 < 255) fade2 ++;
      timer++;
      if (timer > 4 * 60) {
        timer = 0;
        state = 2;
      }
      
      break;

    case 2:
      background("black");
      move.hide();
      fill("white");
      textFont(f1, 48);
      text("A Dream You Had Last Night", 120, 200 );
      textFont(f1, 30);
      text("A Carefully Crafted Experience\n               by Hamza", 200, 300 );
      push();
      fill(fade3);
      textFont(f1, 30);
      text("Click to Begin", 300, 500 );
      pop();

      if (fade3 < 255) fade3 ++;

      break;

    case 3:
      background("#87ceeb");
      image(i2, 10, 80, 500, 300);

      push();
      for(var x = 0; x < width; x++){
        angle = offset * xmovespeed + x * 0.01;
        xmovement = map(sin(angle), 1, -1, widthmin, widthmax);
      }
      offset += 0.1;
    
      translate(xmovement - 200, ymovement);
      avatar();
      ymovement += 5;
    
      if(ymovement > height + 100) ymovement = -400;
      pop();
      
      image(i1, cloudm, 300, 500, 400);
      cloudm += 4 ;
    
      if (cloudm > width) {
        cloudm = -600;
      }

      image(i1, cloudmb, 140, 300, 300);
      cloudmb += -4 ;
    
      if (cloudmb < -300) {
        cloudmb = 800;
      }

      image(i3, 80, 550, 700, 300);
      image(i4, 100, 40, 700, 300);

      if (!s1.isPlaying()){
        s1.play();
      }

      break;

    case 4:
      background("#87ceeb");
      image(i5, 0, 0, 800, 800);

      push();
      translate(160, y);
      avatar2();
      pop();
      y += 5;
      if(y > 300){
        y = 0;
      }

      timer++;
      if (timer > 1 * 60) {
        timer = 0;
        state = 5;
      }

      if (s1.isPlaying()){
        s1.stop();
      }
      break;

    case 5:
      background("#87ceeb");
      boom.show();
      boom.position(130, 300);
      boom.size(500,500);
      image(i5, 0, 0, 800, 800);
      image(i6, 260, 400, 200, 200);

      if (!s2.isPlaying()){
        s2.play();
      }

      timer++;
      if (timer > .8 * 60) {
        timer = 0;
        state = 6;
      }
      break;

    case 6:
      boom.hide();
      image(i5, 0, 0, 800, 800);
      image(i6, 260, 400, 200, 200);
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 7;
      }
      break;

    case 7:
      boom.hide();
      image(i5, 0, 0, 800, 800);
      image(i6, growingx, growingy, growx, growy);
      growx += 2;
      growy += 2;
      growingx += -1;
      growingy += -1;
      if (!s3.isPlaying()){
        s3.play();
      }
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 8;
      }

      break;

    case 8:
      background("black");
      boom.hide();
      fill("white");
      textFont(f1, 48);
      text("So Long Space Cowboy...", 150, 200 );
      push();
      move.show();
      move.position(movin, 300);
      move.size(200,200);
      pop();
      movin += 1;
      if(movin > width){
        movin = -300;
      }
      if (s3.isPlaying()){
        s3.stop();
      }
      if (!s4.isPlaying()){
        s4.play();
      }
      s4.setVolume(.2);

      if (movin == 800){
        state = 9;
      }
      break;

    case 9:
      background("black");
      move.show();
      move.position(growingx2, growingy2);
      move.size(growx2,growy2);
      if (s4.isPlaying()){
        s4.stop();
      }
      break;

      case 10:
      background("black");
      move.show();
      move.position(growingx2, growingy2);
      move.size(growx2,growy2);
      growx2 += 30;
      growy2 += 30;
      growingx2 += -15;
      growingy2 += -15;
      if (growx2 >= 2000){
        state = 0;
      }
      break;

  }

} 
      function mouseReleased() {
        if (state > 10) {
          state = 0;
        }
        else if (state == 2){
          state = 3;
        }
        else if (state == 3){
          state = 4;
        }
        else if (state == 9){
          state = 10;
        }
      }


function avatar() {

  // Parachute
  fill("white");
  push();
  rotate(40);
  rect(250, -150, 20, 170);
  pop();
  push();
  rotate(-40);
  rect(80, 140, 20, 170);
  pop();
  rect(210, 60, 20, 170);
  push();
  fill("#837EE5");
  translate(0,-300);
  quad(51, 316, 130, 194, 288, 194, 390, 316, 318, 267, 110, 267);
  pop();


  // Face
  fill("#BA9276");
  rect(205, 190, 150, 170);
  rect(120, 185, 30, 120);
  rect(280, 185, 30, 120);
  rect(300, 190, 30, 50);
  
  push()
  fill(230);
  translate(165,222);
  rotate(-15);
  ellipse(0, 0, 80, 50)
  pop()
  
  push()
  fill(230);
  translate(240,222);
  rotate(15);
  ellipse(0, 0, 80, 50)
  pop()
  
  
  // Eyes
  // Left Eye
  push()
  fill(0);
  translate(160,160);
  rotate(15);
  ellipse(0, 0, 55, 40)
  pop()
  
  push()
  fill("#593E36");
  translate(160,160);
  rotate(15);
  ellipse(0, 0, 40, 40)
  pop()

  push()
  fill(0);
  translate(160,160);
  rotate(15);
  ellipse(0, 0, 30, 30)
  pop()
  
  push()
  fill(255);
  translate(162,154);
  rotate(15);
  ellipse(0, 0, 10, 5)
  pop()
  
  // Right Eye
  push()
  fill(0);
  translate(245,160);
  rotate(345);
  ellipse(0, 0, 55, 40)
  pop()
  
  push()
  fill("#593E36");
  translate(245,160);
  rotate(345);
  ellipse(0, 0, 40, 40)
  pop()
  
  push()
  fill(0);
  translate(245,160);
  rotate(345);
  ellipse(0, 0, 30, 30)
  pop()
  
  push()
  fill(255);
  translate(245,154);
  rotate(345);
  ellipse(0, 0, 10, 5)
  pop()
  
  fill(255);
  triangle(182, 230, 200, 230, 193, 240);
  
  triangle(207, 230, 220, 230, 213, 240);
  
  fill(0);
  rect(203, 222, 5, 20);
  rect(203, 230, 30, 5);
  
  push()
  fill(0);
  translate(221,232);
  rotate(30);
  rect(0, 0, 10, 5);
  pop()
  
  push()
  fill(0);
  translate(185,232);
  rotate(330);
  rect(0, 0, 10, 5);
  pop()
  
  
  fill("#502114")
  triangle(175, 193, 234, 193, 203, 222);
  
  
  // Top Head
  fill("#00F100");
  rect(159, 80, 48, 30);
  rect(240, 85, 60, 30);
  rect(205, 102, 18, 15);
  
  fill("#00B300");
  rect(156, 102, 15, 15);
  rect(173, 87, 17, 15);
  rect(188, 100, 16, 38);
  rect(205, 82, 18, 26);
  rect(238, 102, 21, 15);
  
  fill("#0D720D");
  rect(142, 107, 15, 35);
  rect(156, 117, 15, 15);
  rect(128, 72, 15, 35);
  rect(158, 62, 50, 15);
  rect(172, 102, 18, 15);
  rect(189, 76, 15, 15);
  rect(195, 117, 35, 15);
  rect(220, 76, 15, 15);
  rect(205, 62, 15, 15);
  rect(269, 73, 15, 35);
  rect(250, 62, 50, 15);
  rect(220, 102, 15, 15);
  rect(245, 117, 35, 15);
  rect(255, 100, 15, 35);
  
  // Right Shoe
  fill("#00F100");
  rect(252, 262, 40, 70);
  
  fill("#00B200");
  rect(289, 248, 35, 40);
  rect(266, 274, 15, 15);
  
  fill(255);
  rect(240, 250, 15, 15);
  
  fill("#0D720D");
  rect(313, 241, 15, 26);
  rect(280, 221, 50, 15);
  rect(244, 235, 26, 16);
  rect(224, 262, 16, 40);
  
  // Left Shoe
  rect(113, 244, 17, 20);
  fill("#00F600");
  rect(126, 260, 15, 20);
  fill("#007300");
  rect(150, 275, 40, 15);
  fill("white");
  rect(112, 262, 15, 15);
  
  // Outline
  fill("black");
  rect(100, 190, 15, 50);
  rect(113, 145, 15, 40);
  rect(128, 115, 15, 20);
  rect(113, 225, 15, 20);
  rect(126, 244, 15, 20);
  rect(150, 261, 35, 15);
  rect(192, 275, 50, 15);
  rect(100, 262, 15, 15);   
  rect(119, 275, 25, 15);
  rect(160, 289, 60, 15);
  rect(245, 289, 60, 15);
  rect(290, 275, 36, 15);
  rect(313, 261, 15, 15);
  rect(313, 190, 15, 50);
  rect(298, 145, 15, 40);
  rect(283, 115, 15, 20);
  rect(269, 98, 15, 15);
}


function avatar2() {

  // Face
  fill("#BA9276");
  rect(205, 190, 150, 170);
  rect(120, 185, 30, 120);
  rect(280, 185, 30, 120);
  rect(300, 190, 30, 50);
  
  push()
  fill(230);
  translate(165,222);
  rotate(-15);
  ellipse(0, 0, 80, 50)
  pop()
  
  push()
  fill(230);
  translate(240,222);
  rotate(15);
  ellipse(0, 0, 80, 50)
  pop()
  
  
  // Eyes
  // Left Eye
  push()
  fill(0);
  translate(160,160);
  rotate(15);
  ellipse(0, 0, 55, 40)
  pop()
  
  push()
  fill("#593E36");
  translate(160,160);
  rotate(15);
  ellipse(0, 0, 40, 40)
  pop()

  push()
  fill(0);
  translate(160,160);
  rotate(15);
  ellipse(0, 0, 30, 30)
  pop()
  
  push()
  fill(255);
  translate(162,154);
  rotate(15);
  ellipse(0, 0, 10, 5)
  pop()
  
  // Right Eye
  push()
  fill(0);
  translate(245,160);
  rotate(345);
  ellipse(0, 0, 55, 40)
  pop()
  
  push()
  fill("#593E36");
  translate(245,160);
  rotate(345);
  ellipse(0, 0, 40, 40)
  pop()
  
  push()
  fill(0);
  translate(245,160);
  rotate(345);
  ellipse(0, 0, 30, 30)
  pop()
  
  push()
  fill(255);
  translate(245,154);
  rotate(345);
  ellipse(0, 0, 10, 5)
  pop()
  
  fill(255);
  triangle(182, 230, 200, 230, 193, 240);
  
  triangle(207, 230, 220, 230, 213, 240);
  
  fill(0);
  rect(203, 222, 5, 20);
  rect(203, 230, 30, 5);
  
  push()
  fill(0);
  translate(221,232);
  rotate(30);
  rect(0, 0, 10, 5);
  pop()
  
  push()
  fill(0);
  translate(185,232);
  rotate(330);
  rect(0, 0, 10, 5);
  pop()
  
  
  fill("#502114")
  triangle(175, 193, 234, 193, 203, 222);
  
  
  // Top Head
  fill("#00F100");
  rect(159, 80, 48, 30);
  rect(240, 85, 60, 30);
  rect(205, 102, 18, 15);
  
  fill("#00B300");
  rect(156, 102, 15, 15);
  rect(173, 87, 17, 15);
  rect(188, 100, 16, 38);
  rect(205, 82, 18, 26);
  rect(238, 102, 21, 15);
  
  fill("#0D720D");
  rect(142, 107, 15, 35);
  rect(156, 117, 15, 15);
  rect(128, 72, 15, 35);
  rect(158, 62, 50, 15);
  rect(172, 102, 18, 15);
  rect(189, 76, 15, 15);
  rect(195, 117, 35, 15);
  rect(220, 76, 15, 15);
  rect(205, 62, 15, 15);
  rect(269, 73, 15, 35);
  rect(250, 62, 50, 15);
  rect(220, 102, 15, 15);
  rect(245, 117, 35, 15);
  rect(255, 100, 15, 35);
  
  // Right Shoe
  fill("#00F100");
  rect(252, 262, 40, 70);
  
  fill("#00B200");
  rect(289, 248, 35, 40);
  rect(266, 274, 15, 15);
  
  fill(255);
  rect(240, 250, 15, 15);
  
  fill("#0D720D");
  rect(313, 241, 15, 26);
  rect(280, 221, 50, 15);
  rect(244, 235, 26, 16);
  rect(224, 262, 16, 40);
  
  // Left Shoe
  rect(113, 244, 17, 20);
  fill("#00F600");
  rect(126, 260, 15, 20);
  fill("#007300");
  rect(150, 275, 40, 15);
  fill("white");
  rect(112, 262, 15, 15);
  
  // Outline
  fill("black");
  rect(100, 190, 15, 50);
  rect(113, 145, 15, 40);
  rect(128, 115, 15, 20);
  rect(113, 225, 15, 20);
  rect(126, 244, 15, 20);
  rect(150, 261, 35, 15);
  rect(192, 275, 50, 15);
  rect(100, 262, 15, 15);   
  rect(119, 275, 25, 15);
  rect(160, 289, 60, 15);
  rect(245, 289, 60, 15);
  rect(290, 275, 36, 15);
  rect(313, 261, 15, 15);
  rect(313, 190, 15, 50);
  rect(298, 145, 15, 40);
  rect(283, 115, 15, 20);
  rect(269, 98, 15, 15);
}
