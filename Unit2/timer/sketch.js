let state = 0;
let timer = 0;
let i1, i2, i3;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/frog.jpg");
  i2 = loadImage("assets/pump.jfif");
  i3 = loadImage("assets/scream.jfif");
  imageMode(CENTER);
}

function draw() {
  background("#837EE5");

  switch (state) {
    case 0:
      image(i1, width/2, 250, 200, 200);
      textSize(20);
      text("I wish I was a frog", 120, 140);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      image(i2, width/2, 250, 200, 200);
      text("Being able to sit on\n pumpkins all day", 120, 115);
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      image(i3, width/2, 250, 200, 200);
      text("AND SCREAM", 130, 140);
      timer++;
      if (timer > 1 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }
}
