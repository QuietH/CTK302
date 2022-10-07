
let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

  switch(state){
    case 0 :
      background("black");
      fill("white");
      textSize(25);
      text("Why did I speed past a stop sign?", width / 2, height / 2);
      break;

    case 1:
      background("#837EE5");
      textSize(25);
      text("I don't believe everything I read.", width / 2, height / 2);
      break;
  }

  timer++;
  if(timer > 4 * 60) {
    timer = 0 ;
    state++;
    if (state > 1){
      state = 0;
    }
  }


}
