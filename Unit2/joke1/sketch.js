
let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

  switch(state){
    case 0 :
      background("purple");
      text("What do agnostics say after you say 'God bless you'?", width / 2, height / 2);
      break;

    case 1:
      background("green");
      text("'Maybe'", width / 2, height / 2);
      break;

  }
}


function mouseReleased() {
  state++;
  if (state > 1) state = 0;
}