let x = 0;
let f1;

function setup() {
  createCanvas(1000, 1000);
  f1 = loadFont("assets/rajdhani.ttf");
}

function draw() {
  background(100);
  textSize(130);
  fill("white");
  textFont(f1);
  text("HOLY CR*P!", x, 500);
  x += 8 ;

  if (x > width) {
    x = -600;
  }
}
