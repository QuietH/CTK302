let f1, f2;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/bignoodle.ttf");
  f2 = loadFont("assets/rajdhani.ttf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("white");
  textFont(f1, 48);
  text("hello there!", width / 2, 100 );
  textFont(f2, 24);
  text("I am Hamza", width / 2, 200);
}
