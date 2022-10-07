let state = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("black");
      for (let j = 0; j < height; j += 25) {
        for (let i = 0; i < width; i += 25) {
          fill(random(255), random(255), random(255));
          rect(i, j, 20, 20);
        }
      }

      break;

    case 1:
      background(random(60));
      for (let j = 0; j < height; j += 25) {
        for (let i = 0; i < width; i += 25) {
          rect(i, j, 10, 10);
        }
      }
      break;

    case 2:
      background("black");
      for (let j = 0; j < height; j += 25) {
        for (let i = 0; i < width; i += 25) {
          fill(random(10, 200), 100, 50)
          push();
          ellipse(i, j, 100, 100);
          pop();
        }
      }
      break;

    case 3:
      background("black");
      for (let j = 0; j < height; j += 25) {
        for (let i = 0; i < width; i += 25) {
          fill("red");
          rect(random(i), j, 40, 10);
        }
      }
      break;

    case 4:
      background("red");
      for (let j = 0; j < height; j += 25) {
        for (let i = 0; i < width; i += 25) {
          fill("yellow");
          rect(i, random(j), 20, 20);
        }
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
