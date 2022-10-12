let xmovespeed, widthmin, widthmax, offset = 0, ymovement = 10, angle, xmovement;
let state = 0;
let i1, i2, i3, i4, i5 ;

let gifLoadImage;

let cloudm = 0;
let cloudmb = 0;

function preload(){
  gifLoadImage = loadImage("assets/boom.gif");
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

  i1 = loadImage("assets/cloud.png");
  i2 = loadImage("assets/cloud2.png");
  i3 = loadImage("assets/cloud3.png");
  i4 = loadImage("assets/cloud4.png");
  i5 = loadImage("assets/boom.gif");

}

function draw() {

  background("#87ceeb");

  switch (state) {

    case 0:
      background("red");
      image(gifLoadImage,0,0);
      break;

    case 1:
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

      break;

    case 2:
      background("black");
      break;

    case 3:
      background("white");
      break;

  }


} 





function mouseReleased() {
  state++;
  if (state > 2) state = 0;

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



