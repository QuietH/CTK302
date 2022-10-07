
let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

  switch(state){
    case 0 :
      textSize(20);
      background("#837EE5");
      text("What do agnostics say after you say 'God bless you'?", width / 2, height / 2);
      break;

    case 1:
      textSize(20);
      background("black");
      fill("white");
      text("'Maybe'", width / 2, height / 2);
      break;

  }
}


function mouseReleased() {
  state++;
  if (state > 1) state = 0;
}
