function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  noStroke();
}


// 8/5/2022 4 hours
// 8/13/2022 1 hour

function draw() {
  background(240);

  if (mouseIsPressed) {
    //background
    fill("green");
    rect(200, 350, 480, 200)
    fill("#2B87CF");
    rect(200, 120, 480, 260)
    
    //clouds
    fill("white");
    circle(32, 32, 30);
    circle(45, 40, 30);
    circle(25, 45, 30);
    
    circle(304, 80, 30);
    circle(320, 72, 30);
    circle(320, 82, 30);
    
    circle(63, 113, 30);
    circle(76, 124, 30);
    circle(52, 128, 30);
    
    //Face
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
       
    // Laser Eyes
    
    fill(random(255), 0, 0);
    quad(148, 148, 173, 151, 11, 336, 67, 355);
    
    quad(232, 149, 260, 150, 57, 345, 113, 352 );
    
    fill("black");
    text('They are', 160, 343);
    fill(random(255), 0, 0);
    text('not', 211, 343);
    fill("black");
    text('friendly', 232, 343);
    
    
    
  } else {
    // when the mouse isn't pressed!
    
    //background
    fill("green");
    rect(200, 350, 480, 200)
    fill("#2B87CF");
    rect(200, 120, 480, 260)
    
    //clouds
    fill("white");
    circle(32, 32, 30);
    circle(45, 40, 30);
    circle(25, 45, 30);
    
    circle(304, 80, 30);
    circle(320, 72, 30);
    circle(320, 82, 30);
    
    circle(63, 113, 30);
    circle(76, 124, 30);
    circle(52, 128, 30);
    
    
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
    
    // Person
    rect(53, 314, 15, 15);
    rect(53, 329, 4, 25);
    rect(53, 329, 15, 4);
    rect(53, 343, 8, 4);
    rect(58, 346, 3, 10);
    rect(48, 346, 3, 10);
    
    //Text
    text('These Titans are called Mips.', 130, 330);
    text('They suddenly parachuted from the sky', 130, 343);
    text('and no one knows where they originate from.', 130, 356);
    text('They are very soft and do not make any noise.', 130, 369);
    text('We really hope they are friendly.', 130, 382);
    
  }

  // this shows mouse location - comment it out when you're done!

// fill(0);
//  text(mouseX + ", " + mouseY, 40, 40);
}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
