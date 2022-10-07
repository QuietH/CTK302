
let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  switch(state){
    case 0 :
      textSize(30);
      background("#837EE5");
      text("An apartment complex?", width / 2, height / 2);
      break;

    case 1:
      textSize(30);
      background("black");
      fill("white");
      text("I actually find them quite simple.", width / 2, height / 2);
      break;
  }

  rect(100, 100, 100, 100);
}


function mouseReleased() {

  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    state++;
    if (state > 1) state = 0;
  }

}
